import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      poppinShades: file(relativePath: { eq: "poppin-shades.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diamonds: file(relativePath: { eq: "diamonds.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sexyOrange: file(relativePath: { eq: "sexy-orange.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.diamonds.childImageSharp.fluid} />
          </div>
          <div className="main-text">Oladimeji Odunsi</div>
          <div className="main-image">
            <Img fluid={data.poppinShades.childImageSharp.fluid} />
          </div>
          <div className="side-image right ">
            <Img fluid={data.sexyOrange.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Visual Artist and Photographer</div>
    </div>
  )
}

export default Banner
