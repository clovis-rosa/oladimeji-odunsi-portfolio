import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.scss"

// Scrollbar
// import Scrollbar from "smooth-scrollbar"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import VideoSection from "../components/videoSection"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <AboutBlurb />
    <VideoSection />
    <Footer />
  </>
)

export default IndexPage
