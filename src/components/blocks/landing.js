import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../../images/trinity-cycling.svg"
import Img from 'gatsby-image'

const LandingBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      cyclistsAlley: file(relativePath: { eq: "cyclists-alley.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Img
        alt="cyclists racing along a narrow road in Belgium, as viewed from an adjacent alley"
        fluid={data.cyclistsAlley.childImageSharp.fluid}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,22,0.75)",
        }}
      >
        <div style={{ margin: "20vh auto", textAlign: "center" }}>
          <img
            className="mx-auto"
            src={Logo}
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
              width: '40rem',
              maxWidth: "90%",
            }}
          />
          <a href="https://instagram.com/trinitycycling">
            <button
              className="bg-white mb-4 p-4 rounded-lg text-white"
              style={{
                background:
                  "linear-gradient(228deg,#1400c8 0%,#b900b4 51%,#f50000 100%)",
              }}
            >
              Follow us on Instagram
            </button>
          </a>
          <a href="https://www.facebook.com/trinitycycling" className="md:ml-4">
            <button
              className="bg-white p-4 rounded-lg text-white"
              style={{ background: "#1778f2" }}
            >
              Find us on Facebook
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandingBlock
