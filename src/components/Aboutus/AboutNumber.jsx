import React from 'react'
import './About.css'
import img from '../../assets/About/user.svg'
import img1 from '../../assets/About/customer-loyalty.svg'
import img2 from '../../assets/About/employment.svg'
import img3 from '../../assets/About/freelancer.svg'
import img4 from '../../assets/About/add.svg'
export default function AboutNumber() {
  return (
    <div className="Aboutabout-container">
    <div style={{fontWeight:"400"}} className="abouttitileheading">  SUCCESS , BY THE NUMBERS</div>
    <div className="aboutsuccesnoboxflex">
     <div className="aboutsinglenumber">
         <div className="abouttrustimgbox"><img src={img} alt="" /></div>
         <div className="abouttrustvaluebox">6k+</div>
         <div className="abouttrustvaluetypebox">Current Users</div>
     </div>
     <div className="aboutsinglenumber">
     <div className="abouttrustimgbox"><img src={img1} alt="" /></div>
         <div className="abouttrustvaluebox">80%</div>
         <div className="abouttrustvaluetypebox">Returned Clients</div>
     </div>
     <div className="aboutsinglenumber">
     <div className="abouttrustimgbox"><img src={img2} alt="" /></div>
         <div className="abouttrustvaluebox">600+</div>
         <div className="abouttrustvaluetypebox">Resources</div>
     </div>
     <div className="aboutsinglenumber">
     <div className="abouttrustimgbox"><img src={img3} alt="" /></div>
         <div className="abouttrustvaluebox">800+</div>
         <div className="abouttrustvaluetypebox">Freelauncers</div>
     </div>
     <div className="aboutsinglenumber">
     <div className="abouttrustimgbox"><img src={img4} alt="" /></div>
         <div className="abouttrustvaluebox">48</div>
         <div className="abouttrustvaluetypebox">Team Members</div>
     </div>
    </div>
    </div>

  )
}
