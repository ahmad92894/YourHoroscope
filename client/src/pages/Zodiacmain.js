import React from 'react';
import aqua from '../img/aqua.png';
import aries from '../img/aries.png';
import cancer from '../img/cancer.png';
import capricorn from '../img/capricorn.png';
import gemini from '../img/gemini.png';
import leo from '../img/leo.png';
import libra from '../img/libra.png';
import pisces from '../img/pisces.png';
import sagittarius from '../img/sagitt.png';
import scorpio from '../img/scorpio.png';
import taurus from '../img/taurus.png';
import virgo from '../img/virgo.png';
import { Link } from 'react-router-dom';

const Zodiacmain = () => {
    return (
<div className="container text-center">
  <div className="row align-items-end">
    <div className="col">
    <Link to="/Aquarius">
    <img src={aqua} alt="aqua"/></Link>
      Aqarius
    </div>
    <div className="col">
    <Link to="/Aries">
    <img src={aries} alt="aries"/></Link>
      Aries
    </div>
    <div className="col">
    <Link to="/Cancer">
    <img src={cancer} alt="cancer"/></Link>
        Cancer
    </div>
    <div className="col">
    <Link to="/Capricorn">
    <img src={capricorn} alt="capricorn"/></Link>   
        Capricorn
    </div>
    <div className="col">
    <Link to="/Gemini">
    <img src={gemini} alt="gemini"/></Link>  
        Gemini
    </div>
    <div className="col">
    <Link to="/Leo">
    <img src={leo} alt="leo"/></Link>
        Leo
    </div>
    <div className="col">
    <Link to="/Libra">
    <img src={libra} alt="libra"/></Link>  
        Libra
    </div>
    <div className="col">
    <Link to="/Pisces">
    <img src={pisces} alt="pisces"/></Link>
        Pisces
    </div>
    <div className="col">
    <Link to="/Sagittarius">
    <img src={sagittarius} alt="sagittarius"/></Link>    
        Sagittarius
    </div>
    <div className="col">
    <Link to="/Scorpio">
    <img src={scorpio} alt="scorpio"/></Link>
        Scorpio
    </div>
    <div className="col">
    <Link to="/Taurus">
    <img src={taurus} alt="taurus"/></Link>
        Taurus
    </div>
    <div className="col">
    <Link to="/Virgo">
    <img src={virgo} alt="virgo"/></Link>
      Virgo
    </div>
  </div>
</div>
    )
}
export default Zodiacmain;
