import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SponsorBlock = () => {
  const {
    trek,
    pactimo,
    communityTitle,
    svajdaTeam,
    arundel,
    joes,
  } = useStaticQuery(graphql`
    {
      trek: file(
        relativePath: { eq: "sponsor-logos/trek-arlington-keller.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }

      pactimo: file(relativePath: { eq: "sponsor-logos/pactimo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }

      communityTitle: file(
        relativePath: { eq: "sponsor-logos/community-national-title.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }

      svajdaTeam: file(
        relativePath: { eq: "sponsor-logos/the-svajda-team.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }

      arundel: file(relativePath: { eq: "sponsor-logos/arundel.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }

      joes: file(relativePath: { eq: "sponsor-logos/joes-coaching.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }
    }
  `)
  return (
    <div className="bg-darkblue p-5 text-center">
      <h1 className="text-white text-2xl mb-5">Our Partners</h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="px-4">
          <a href="https://www.trekbikesofarlington.com/">
            <Img
              alt="Trek Bikes of Arlington/Keller"
              fluid={trek.childImageSharp.fluid}
              style={{ width: "200px" }}
            />
          </a>
        </div>
        <div className="px-4">
          <a href="https://www.pactimo.com/">
            <Img
              fluid={pactimo.childImageSharp.fluid}
              alt="Pactimo"
              style={{ width: "130px", height: "auto" }}
            />
          </a>
        </div>
        <div className="px-4">
          <a href="http://communitynationaltitle.com/">
            <Img
              fluid={communityTitle.childImageSharp.fluid}
              alt="Community National Title"
              style={{ width: "200px" }}
            />
          </a>
        </div>
        <div className="px-4">
          <Img
            fluid={svajdaTeam.childImageSharp.fluid}
            alt="The Svajda Team Real Estate Professionals"
            style={{ width: "200px" }}
          />
        </div>
        <div className="px-4">
          <Img
            fluid={arundel.childImageSharp.fluid}
            alt="Arundel Bike Equipment"
            style={{ width: "180px" }}
          />
        </div>
        <div className="px-4">
          <Img
            fluid={joes.childImageSharp.fluid}
            alt="Joe's Coaching"
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default SponsorBlock
