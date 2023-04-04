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
    <a><img src={aqua} alt="aqua"/></a>
      Aqarius
    </div>
    <div className="col">
    <a><img src={aries} alt="aries"/></a>
      Aries
    </div>
    <div className="col">
    <a><img src={cancer} alt="cancer"/></a>
        Cancer
    </div>
    <div className="col">
    <a><img src={capricorn} alt="capricorn"/></a>    
        Capricorn
    </div>
    <div className="col">
    <a><img src={gemini} alt="gemini"/></a>    
        Gemini
    </div>
    <div className="col">
    <a><img src={leo} alt="leo"/></a>
        Leo
    </div>
    <div className="col">
    <a><img src={libra} alt="libra"/></a>    
        Libra
    </div>
    <div className="col">
    <a><img src={pisces} alt="pisces"/></a>
        Pisces
    </div>
    <div className="col">
    <a><img src={sagittarius} alt="sagittarius"/></a>"    
        Sagittarius
    </div>
    <div className="col">
    <a><img src={scorpio} alt="scorpio"/></a>
        Scorpio
    </div>
    <div className="col">
    <a><img src={taurus} alt="taurus"/></a>
        Taurus
    </div>
    <div className="col">
    <a><img src={virgo} alt="virgo"/></a>
      Virgo
    </div>
  </div>
</div>
    )
}
export default Zodiacmain;