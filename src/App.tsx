import { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'

import rebboPf from './assets/rebbo-development.png'
import { skills } from './data/skills'
import { Skillblock } from './components/skillblock/Skillblock'
import Contact from './components/contacts/contacts'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      
      <div className='mainsec' id='home'>
        <div className='maintext'>
          <div className='text'>
            <p>Hi, I'm Rebbo</p>
            <div className="subtext">
              <div className='sideline'></div>
              <div className='text'>
                <p>sleep addict by day</p>
                <p className='right'>developer by night</p>
              </div>
            </div>
          </div>
          <img src={rebboPf} alt="rebbo.png" />
        </div>
      </div>


      <div className='skills'>
        <p className='text'>Work Experience</p>
        <div className='skillblocks'>
          {skills.map(({ name, image, imageAlt }) => (
            <Skillblock name={name} image={image} imageAlt={imageAlt} />
          ))}
        </div>
      </div>

      <Contact />

      <div className="preFooter" />
      <Footer />
    </>

  )
}

export default App
