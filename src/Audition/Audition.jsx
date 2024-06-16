import React from 'react'
import './Audition.css'
import supabase from '../config/supabaseClient.jsx'
import {useAuthContext} from '../Context/auth.context'
import {Link} from 'react-router-dom'

function Audition({audition}) {
  const {posts, setPosts} = useAuthContext();
  const deleteAudition = async (id) => {
    const {error} =await supabase.from('auditions').delete().eq('id', id);
    if (error) {
      console.log("error");
    }
    setPosts(posts.filter((audition) => audition.id !== id ));

  }

  const formatDeadline = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(audition?.app_deadline.replace(/-/g, '\/').replace(/T.+/, ''));
    const month = months[date.getMonth()];
    return month + ' ' + date.getDate() +', '+ date.getFullYear();
  }

  const formatAudDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(audition?.audition_date.replace(/-/g, '\/').replace(/T.+/, ''));
    const month = months[date.getMonth()];
    return month + ' ' + date.getDate() + ', '+ date.getFullYear();
  }

  const deadline = formatDeadline();
  const audDate = formatAudDate();


  return (
    <div className="auditionPost">
      <h2>{audition?.position}</h2>
      <p>{audition?.ensemble}</p>
      <p>{audition?.location}</p>
      <p>Deadline: {deadline}</p>
      <p>Date: {audDate}</p>
      <a href={audition?.orchestra_website} id="webLink" target="_blank">{audition.ensemble} Website</a>
      <Link to={"/"+audition.id}><button id="editButton">Edit</button></Link>
      <button onClick={() => deleteAudition(audition.id)} id="deleteButton">Delete</button>
    </div>
  )
}

export default Audition