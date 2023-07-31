import React from 'react'
import './SecondSection.scss'

import bowl from '../img/bowl.jpeg'
import pizza from '../img/pizza.jpeg'
import frikadellen from '../img/frikadellen.jpeg'
import glass from '../img/glass.jpeg'
import pizza2 from '../img/pizza2.jpeg'
import scampi from '../img/scampi.jpeg'
import spagetthi from '../img/spagetthi.jpeg'
import teller from '../img/teller.jpeg'


function SecondSection() {
  return (
    <div>
      <section className="second_section">
        <div className="food_grid">
          <article className="food_container">
            <img src={bowl} alt="" />
            <h3>Fusce dictum finibus</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$45 / $55</p>
          </article>
          <article className="food_container">
            <img src={pizza} alt="" />
            <h3>Aliquam sagittis</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$65 / $70</p>
          </article>
          <article className="food_container">
            <img src={frikadellen} alt="" />
            <h3>Sed varius turpis</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$30.50</p>
          </article>
          <article className="food_container">
            <img src={glass} alt="" />
            <h3>Aliquam sagittis</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$25.50</p>
          </article>
          <article className="food_container">
            <img src={pizza2} alt="" />
            <h3>Maecenas eget justo</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$25.50</p>
          </article>
          <article className="food_container">
            <img src={scampi} alt="" />
            <h3>Quisque et felis eros</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$25.50</p>
          </article>
          <article className="food_container">
            <img src={spagetthi} alt="" />
            <h3>sed ulticies dui</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$25.50</p>
          </article>
          <article className="food_container">
            <img src={teller} alt="" />
            <h3>Donec porta consequat</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores?</p>
            <p className="price">$25.50</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default SecondSection
