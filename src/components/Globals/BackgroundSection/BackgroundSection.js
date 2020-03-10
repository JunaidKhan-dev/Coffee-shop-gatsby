import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
const BackgroundSection = ({ img, className, title, children }) => {
  return (
    <BackgroundImage fluid={img} className={className}>
      <h1 className='title text-white text-uppercase text-center display-4 font-weight-bold'>{title}</h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: 'default title'
}
export default styled(BackgroundSection)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 158, 9, 0.5), rgba(255, 158, 9, 0.5));
  background-position: center;
  background-size: cover;
  /* this is very important to put opacity equal to 1 with !important ketword so that linear gredient can work */
  opacity: 1 !important;  
`
