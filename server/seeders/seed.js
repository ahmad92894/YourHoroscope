const db = require('../config/connection');
const { User, Thought, Horoscope } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtseeds.json');
const horoscopeSeeds = require('./horoscopeSeeds.json');

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});
    await Horoscope.deleteMany({});
    
    await User.create(userSeeds);

    await Horoscope.create(horoscopeSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
