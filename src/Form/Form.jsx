import React from 'react'
import './Form.css'
function Form() {
  const addAudition = async (e) => {
    e.preventDefault();
    const {error} = await supabase.from('')
  }
  return (
   <>
   <form>
    <label htmlFor="position">Position Title</label>
    <input id="position" name="position" type="text"/>
    <label htmlFor="ensemble">Ensemble Group Name</label>
    <input id="ensemble" name="ensemble" type="text"/>
    <label htmlFor="location">Location</label>
    <input id="location" name="location" type="text"/>
    <label htmlFor="deadline">Application Deadline</label>
    <input id="deadline" name="deadline" type="date"/>
    <label htmlFor="date">Audition Date</label>
    <input id="date" name="date" type="date"/>
    <label htmlFor="website">Website</label>
    <input id="website" name="website" type="url"/>
   </form>
   </>
  )
}

export default Form