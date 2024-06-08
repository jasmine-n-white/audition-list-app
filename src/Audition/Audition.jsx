import React from 'react'

function Audition({audition}) {
  return (
    <div className="auditionPost">
      <h2>{audition.position}</h2>
      <h2>{audition.ensemble}</h2>
      <h2>{audition.location}</h2>
      <h2>{audition.deadline}</h2>
      <h2>{audition.audDate}</h2>
      <h2>{audition.website}</h2>
    </div>
  )
}

export default Audition