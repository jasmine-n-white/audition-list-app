import React from 'react'
import validator from 'validator'
import './Form.css'
import {useEffect} from 'react'
import {useAuthContext} from '../Context/auth.context'
import supabase from '../config/supabaseClient.jsx'


function Form({fetchAuditions}) {

  const {formData, setFormData, errors, setErrors} = useAuthContext();

  const handlePosition = (e) => {
    const {value} = e.target;
    if (value.length < 2) {
      setErrors({...errors, position:"Position Title is required."});
    } else {
      setErrors({...errors, position:""});
      setFormData({...formData, position: value});
    }
  }

  const handleEnsemble = (e) => {
    const {value} = e.target;
    if (value.length < 2) {
      setErrors({...errors, ensemble:"Ensemble Name is required."});
    } else {
      setErrors({...errors, ensemble:""});
      setFormData({...formData, ensemble: value});
    }
  }

  const addAudition = async (e) => {
    e.preventDefault();
    const {error} = await supabase.from('auditions').insert({position: position, ensemble: ensemble, location: location, app_deadline: deadline, audition_date: date, orchestra_website: website});
    fetchAuditions();
    setFormData({position:"", ensemble:"", location:"", deadline:"", date:"", website:""})
    fetchAuditions();
  }
  return (
   <>
   <form>
    <label htmlFor="position">Position Title</label>
    <input id="position" name="position" type="text" value={formData.position} onChange={handlePosition} />
    <label htmlFor="ensemble">Ensemble Group Name</label>
    <input id="ensemble" name="ensemble" type="text" value={formData.ensemble} onChange={handleEnsemble} />
    <label htmlFor="location">Location</label>
    <input id="location" name="location" type="text" value={formData.location} />
    <label htmlFor="deadline">Application Deadline</label>
    <input id="deadline" name="deadline" type="date" value={formData.deadline} />
    <label htmlFor="date">Audition Date</label>
    <input id="date" name="date" type="date" value={formData.date} />
    <label htmlFor="website">Website</label>
    <input id="website" name="website" type="url" value={formData.website}/>
    <button onClick={addAudition}>Add Audition</button>
   </form>
   </>
  )
}

export default Form