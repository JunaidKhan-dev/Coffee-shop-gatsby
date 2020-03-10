import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <footer className={`${className}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 text-yellow text-center text-capitalize'>
            <h3>all rights reserved &copy; {new Date().getFullYear().toString()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default styled(Footer)`
background: var(--mainBrown);
padding: 1.5rem 0;

`
