import React from "react"
import trekBikes from "../../images/sponsor-logos/trek-arlington-keller.png"
import pactimo from "../../images/sponsor-logos/pactimo.png"
import communityTitle from "../../images/sponsor-logos/community-national-title.png"
import svajdaTeam from "../../images/sponsor-logos/the-svajda-team.png"
import arundel from "../../images/sponsor-logos/arundel.png"
import joes from "../../images/sponsor-logos/joes-coaching.png"

const SponsorBlock = () => {
  return (
    <div className="bg-darkblue p-5 text-center">
      <h1 className="text-white text-2xl mb-5">Our Partners</h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="px-4">
          <img
            src={trekBikes}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "200px" }}
          />
        </div>
        <div className="px-4">
          <img
            src={pactimo}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "130px", height: "auto" }}
          />
        </div>
        <div className="px-4">
          <img
            src={communityTitle}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "200px" }}
          />
        </div>
        <div className="px-4">
          <img
            src={svajdaTeam}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "200px" }}
          />
        </div>
        <div className="px-4">
          <img
            src={arundel}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "180px" }}
          />
        </div>
        <div className="px-4">
          <img
            src={joes}
            alt="Trek Bikes of Arlington/Keller"
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default SponsorBlock
