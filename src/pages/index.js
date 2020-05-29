import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.scss"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/Banner"
import AboutBlurb from "../components/AboutBlurb"

const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <AboutBlurb />
  </>
)

export default IndexPage
