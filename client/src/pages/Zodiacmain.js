import React from 'react';
import aqua from '../img/aqua.png';
import aries from '../img/aries.png';
import cancer from '../img/cancer.png';
import capricorn from '../img/capricorn.png';
import gemini from '../img/gemini.png';
import leo from '../img/leo.png';
import libra from '../img/libra.png';
import pisces from '../img/pisces.png';
import sagittarius from '../img/sagittarius.png';
import scorpio from '../img/scorpio.png';
import taurus from '../img/taurus.png';
import virgo from '../img/virgo.png';

const Zodiacmain = () => {
    return (
<div className="container text-center">
  <div className="row align-items-end">
    <div className="col">
    <a href="client/src/pages/Aquarius.js"><img src={aqua} alt="aqua"/></a>
      Aqarius
    </div>
    <div className="col">
    <a href="client/src/pages/Aries.js"><img src={aries} alt="aries"/></a>
      Aries
    </div>
    <div className="col">
    <a href="client/src/pages/Cancer.js"><img src={cancer} alt="cancer"/></a>
        Cancer
    </div>
    <div className="col">
    <a href="client/src/pages/Capricorn.js"><img src={capricorn} alt="capricorn"/></a>    
        Capricorn
    </div>
    <div className="col">
    <a href="client/src/pages/Gemini.js"><img src={gemini} alt="gemini"/></a>    
        Gemini
    </div>
    <div className="col">
    <a href="client/src/pages/Leo.js"><img src={leo} alt="leo"/></a>
        Leo
    </div>
    <div className="col">
    <a href="client/src/pages/Libra.js"><img src={libra} alt="libra"/></a>    
        Libra
    </div>
    <div className="col">
    <a href="client/src/pages/Pisces.js"><img src={pisces} alt="pisces"/></a>
        Pisces
    </div>
    <div className="col">
    <a href="client/src/pages/Sagittarius.js"><img src={sagittarius} alt="sagittarius"/></a>"    
        Sagittarius
    </div>
    <div className="col">
    <a href="client/src/pages/Scorpio.js"><img src={scorpio} alt="scorpio"/></a>
        Scorpio
    </div>
    <div className="col">
    <a href="client/src/pages/Taurus.js"><img src={taurus} alt="taurus"/></a>
        Taurus
    </div>
    <div className="col">
    <a href="client/src/pages/Virgo.js"><img src={virgo} alt="virgo"/></a>
      Virgo
    </div>
  </div>
</div>
    )
}
export default Zodiacmain
