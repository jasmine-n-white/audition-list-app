import React from 'react'
import Audition from '../Audition/Audition.jsx'
import {Link} from 'react-router-dom'
import './AuditionList.css'

function AuditionList({auditions}) {
  const posts =[];
  for (let i=0; i<auditions.length; i++) {
    const audition = auditions[i];
    posts.push(<Audition key={i} audition={audition} />);
  }
  let extraText = "";
  if (posts.length==0) {
    extraText= <h2>No audition posts available to view yet. Create a new post!</h2>
  }
  return (
    <>
      <div className="auditionPageExtras">{extraText}{<Link to={"/create"}><button id="addButton">Add New Audition</button></Link>}</div>
      <div className="auditionList">{posts}</div>
    </>
  )
}

export default AuditionList