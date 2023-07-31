import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div>
      <header className='header'>
        <div className="header_headings">
          <h3>Hello there</h3>
          <h1>We Are Glint</h1>
        </div>
        <p className='header_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae placeat quas, excepturi quo ratione similique, sapiente suscipit consectetur quaerat temporibus blanditiis, veniam voluptas nisi? Perspiciatis accusamus minima magni quaerat. Possimus perferendis fugiat numquam? Itaque laudantium perspiciatis obcaecati facilis? Repellendus voluptate ipsum aliquid aspernatur sed sapiente eaque sit tenetur laborum incidunt.</p>
        <section className='number_section'>
          <div>
            <h2>127</h2>
            <p>Award Received</p>
          </div>
          <div className="white_border"></div>
          <div>
            <h2>1505</h2>
            <p>Cups of Coffee</p>
          </div>
          <div className="white_border"></div>
          <div>
            <h2>109</h2>
            <p>Projects Completed</p>
          </div>
          <div className="white_border"></div>
          <div>
            <h2>102</h2>
            <p>Happy Clients</p>
          </div>
        </section>
      </header>
    </div>
  )
}

export default Header
