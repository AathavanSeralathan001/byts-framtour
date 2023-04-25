import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/hero.css'
import heroimg from '../assets/heroimg.png'
import herologo from '../assets/herologo.png';
import herodecorline from '../assets/herodecorline.png'

const Hero = () => {
  return (
    <Container className='container'>
        <Row className="justify-content-md-center" >
            <Col className='hero-content '>
                <div className='hero-text'>
                    <h1 className='farm'>
                       
                        <img src={herologo} alt="hero-logo" className='herologo' /> 
                        
                    Farm
                    </h1>
                    <h1 className='tour'>TOUR</h1>
                    <img src={herodecorline} alt="hero-decor-line" className='herodecor'/>
                    <p>
                    Food Farming is proud of our past and excited about our future. We strive to continue being one of India and New Zealand's great food companies, offering quality fruits and vegetable. 
                    </p>


                </div>
            </Col>
            <Col className='hero-img '>
                <div className='heroimg-container'>
                    <img src={heroimg} alt="hero-img"/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero
