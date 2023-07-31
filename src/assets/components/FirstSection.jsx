import React from 'react'
import './FirstSection.scss'
import brush from '../img/brush.svg'
import illustration from '../img/illustration.svg'
import megaphone from '../img/megaphone.svg'
import globe from '../img/globe.svg'


function FirstSection() {
  return (
    <div>
      <section className="first_section">
        <header className="first_section_header">
          <h3>What We Do</h3>
          <h2>We've got everything you need to launch and grow your business</h2>
        </header>
        <div className="first_section_grid_container">
          <div className='brush_div'>
            <img src={brush} alt="" />
            <article>
              <h3>Brand Identity</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sed nobis tempora vero. Aliquid cupiditate nesciunt unde cumque. Ullam enim quibusdam temporibus amet voluptates veritatis odio repellat, incidunt provident corporis.</p>
            </article>
          </div>
          <div className='illustration_div'>
            <img src={illustration} alt="" />
            <article>
              <h3>Brand Identity</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sed nobis tempora vero. Aliquid cupiditate nesciunt unde cumque. Ullam enim quibusdam temporibus amet voluptates veritatis odio repellat, incidunt provident corporis.</p>
            </article>
          </div>
          <div className='megaphone_div'>
            <img src={megaphone} alt="" />
            <article>
              <h3>Brand Identity</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sed nobis tempora vero. Aliquid cupiditate nesciunt unde cumque. Ullam enim quibusdam temporibus amet voluptates veritatis odio repellat, incidunt provident corporis.</p>
            </article>
          </div>
          <div className='globe_div'>
            <img src={globe} alt="" />
            <article>
              <h3>Brand Identity</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sed nobis tempora vero. Aliquid cupiditate nesciunt unde cumque. Ullam enim quibusdam temporibus amet voluptates veritatis odio repellat, incidunt provident corporis.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection
