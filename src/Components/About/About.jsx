import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2> Nurturing Tomorrow's Leader Today </h2>
        <p> Embark ona transformative eductional journey with our university's comprehensive education programs . Our cutting-edge curriculum is designed to empower students with the knowledge,skills and experiences needed to excek in the dynamic field of education.</p>
        <p> With a focus on innovation, hands-on learning , and personalized mentorship,our programs prepare aspiring educators to make a meaningful impact in classrooms ,schools and communities.</p>
        <p> Whether you aspire to become a teacher , administrator, counsler,or educational leader,our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About