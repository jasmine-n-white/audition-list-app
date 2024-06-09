import React from 'react'
import './Audition.css'

function Audition({audition}) {

  return (
    <div className="auditionPost">
      <h2>{audition?.position}</h2>
      <h2>{audition?.ensemble}</h2>
      <h2>{audition?.location}</h2>
      <h2>Deadline: {audition?.app_deadline}</h2>
      <h2>Date: {audition?.audition_date}</h2>
      <h2>{audition?.orchestra_website}</h2>
    </div>
  )
}

export default Audition