import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BackgroundSection from '../components/Globals/BackgroundSection/BackgroundSection'

const AboutPage = ({ data }) => {
  const { image: { childImageSharp: { fluid } } } = data
  return (
    <Layout>
      <Seo title='About' keywords={['gatsby', 'application', 'react']} />
      <BackgroundSection img={fluid} title='about us' styleClass='default-background' />
    </Layout>
  )
}

export const query = graphql`
query{
  image:file(relativePath:{eq:"about-background.jpeg"}){
    childImageSharp{
      fluid{
       ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default AboutPage
