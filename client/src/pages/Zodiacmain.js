import aqua from "../img/aqua.png";
import aries from "../img/aries.png";
import cancer from "../img/cancer.png";
import capricorn from "../img/capricorn.png";
import gemini from "../img/gemini.png";
import leo from "../img/leo.png";
import libra from "../img/libra.png";
import pisces from "../img/pisces.png";
import sagittarius from "../img/sagitt.png";
import scorpio from "../img/scorpio.png";
import taurus from "../img/taurus.png";
import virgo from "../img/virgo.png";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Zodiacmain = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container text-center">
      <div className="row align-items-end">
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/aquarius">
            <img src={aqua} alt="aqua"
              width="300"
              height="300" />
              </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/aries">
            <img src={aries} alt="aries"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/cancer">
            <img src={cancer} alt="cancer"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/capricorn">
            <img src={capricorn} alt="capricorn"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/gemini">
            <img src={gemini} alt="gemini"
            
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/leo">
            <img src={leo} alt="leo"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/libra">
            <img src={libra} alt="libra"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/pisces">
            <img src={pisces} alt="pisces"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/sagittarius">
            <img src={sagittarius} alt="sagittarius"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/scorpio">
            <img src={scorpio} alt="scorpio"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/taurus">
            <img src={taurus} alt="taurus"
              width="300"
              height="300" />
          </Link>

        </div>
        <div className="col" style={{ padding: "10px" }}>
          <Link to="/zodiac/virgo">
            <img src={virgo} alt="virgo"
              width="300"
              height="300" />
          </Link>

        </div>
      </div>
    </div>
  );
};
export default Zodiacmain;