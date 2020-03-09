import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Fa500Px } from 'react-icons/fa'
const IndexPage = () => (
  <Layout>
    <Seo title='Home' keywords={['gatsby', 'application', 'react']} />
    <h2>SOmething</h2>
    <Fa500Px />
  </Layout>
)

export default IndexPage
