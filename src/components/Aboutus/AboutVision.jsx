import React from 'react'
import img1 from '../../assets/About/istockphoto-1346000818-170667a.png'
import img2 from '../../assets/About/procreator-ux-design-studio-VzJjPuk53sk-unsplash.png'
export default function AboutVision({width}) {
  return (
    <div style={{marginTop:"3vw"}} className="Aboutabout-container">
    <div className="abouttitileheading"> Our Vision</div>
    <div style={{marginTop:"2vw", display: width > 700 ? "flex":"block", alignItems: "center" }}>
          <div style={{width:width > 700 ?"55%":"100%"}}>

        <div className="bluetitilesubabout">Quickest Solution</div>
        <div className="blackaboutaboutdata">
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        </div>
        <div className="blackaboutaboutdata">
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        </div>
        <div className="bluetitilesubabout">Cost Minimization</div>
        <div className="blackaboutaboutdata">
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        </div>
        <div className="blackaboutaboutdata">
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        </div>
        <div className="bluetitilesubabout">Cost Minimization</div>
       
        <div className="blackaboutaboutdata">
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        One-stop solution to sort all your requirement ranging frome-commerce setup , Software Development ,Career Guidance, Banking, Insurance, Business to Local Services, quickly, professionally and conveniently.
        </div>
       
          </div>
        <div className="aboutaboutimg">
          <img style={{borderRadius:"0.4vw"}} src={img1} alt="" />
          <div style={{marginTop:"2vw"}}>
          <img  style={{borderRadius:"0.4vw"}}src={img2} alt="" /> 
          </div>
        </div>
      </div>
    </div>
  )
}
