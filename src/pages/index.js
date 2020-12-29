import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingBlock from "../components/blocks/landing"
import AboutBlock from "../components/blocks/about"
import SponsorBlock from "../components/blocks/sponsors"

const IndexPage = () => {

  return (
    <Layout>
      <SEO />
      <LandingBlock/>
      <AboutBlock/>
      <SponsorBlock/>
    </Layout>
  )
}

export default IndexPage
