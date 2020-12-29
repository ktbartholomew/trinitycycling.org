import React from "react"
import waves from '../../images/sponsor-logos/trinity-waves.svg'

const AboutBlock = () => {
  return (
    <div className="p-10 py-20" style={{background: `url(${waves}) bottom no-repeat`, backgroundSize: 'cover' }}>
      <div className="max-w-4xl mx-auto xl:text-white">
        <h1 className="text-4xl xl:text-6xl mb-10">
          Trinity Cycling improves our community through the sport of cycling.
        </h1>
        <p className="text-xl text-white">
          We’re not your typical bike racing team, all focused on race results
          at any cost. We’re tightly-knit members of our local community,
          ambassadors for the sport, and role models for teammates and
          competitors alike.
        </p>
      </div>
    </div>
  )
}

export default AboutBlock
