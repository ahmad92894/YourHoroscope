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
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Aquarius"> 
                        <img src={aqua} alt="aqua"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Aries">
                        <img src={aries} alt="aries"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Cancer">
                        <img src={cancer} alt="cancer"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Capricorn">
                        <img src={capricorn} alt="capricorn"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Gemini">
                        <img src={gemini} alt="gemini"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Leo">
                        <img src={leo} alt="leo"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Libra">
                        <img src={libra} alt="libra"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Pisces">
                        <img src={pisces} alt="pisces"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Sagittarius">
                        <img src={sagittarius} alt="sagittarius"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Scorpio">
                        <img src={scorpio} alt="scorpio"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Taurus">
                        <img src={taurus} alt="taurus"
                            width="400" 
                            height="500" /></Link>

                </div>
                <div className="col" style={{padding: "10px"}}>
                    <Link to="/Virgo">
                        <img src={virgo} alt="virgo"
                            width="400" 
                            height="500" /></Link>
                            

                </div>
            </div>
        </div>

    )
}
export default Zodiacmain;
