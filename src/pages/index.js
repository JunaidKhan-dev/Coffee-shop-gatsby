import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Fa500Px } from 'react-icons/fa'
import BackgroundSection from '../components/Globals/BackgroundSection/BackgroundSection'

const IndexPage = ({ data }) => {
  const { image: { childImageSharp: { fluid } } } = data
  console.log(fluid)
  return (
    <Layout>
      <Seo title='Home' keywords={['gatsby', 'application', 'react']} />
      <BackgroundSection img={fluid} title='Regular Joe`s Coffee' styleClass='default-background' />
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
export default IndexPage
