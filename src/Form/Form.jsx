import React from 'react'
import validator from 'validator'
import './Form.css'
import {useEffect} from 'react'
import {useAuthContext} from '../Context/auth.context'
import supabase from '../config/supabaseClient.jsx'


function Form({fetchAuditions}) {

  const {formData, setFormData, errors, setErrors} = useAuthContext();

  const handlePosition = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({...errors, position:"Position Title is required."});
    } else {
      setErrors({...errors, position:""});
      setFormData({...formData, position: value});
    }
  }

  const handleEnsemble = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({...errors, ensemble:"Ensemble Name is required."});
    } else {
      setErrors({...errors, ensemble:""});
      setFormData({...formData, ensemble: value});
    }
  }
   const handleLocation = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({...errors, location:"Ensemble Name is required."});
    } else {
      setErrors({...errors, location:""});
      setFormData({...formData, location: value});
    }
  }

  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
//working on getting selected date to be chosen
  const handleDeadline = (event) => {
    const selectedDate = new Date(event.target.value);
    const formattedDate = value.toISOString().split('T')[0];
    if (formattedDate < currentDate){
      console.log("Too early");
      setErrors({...errors, deadline:"Application Deadline must be a valid date."});
    } else {
      setErrors({...errors, deadline:""});
      setFormData({formData, deadline: formattedDate});
      console.log(formattedDate);
    }
  }

  const handleDate = (event) => {
    const selectedDate = new Date(event.target.value);
    const formattedDate = date.toISOString().split('T')[0];
    if (formattedDate < currentDate){
      console.log("Too early");
      setErrors({...errors, audDate: "Audition Date must be a valid date."});
    } else {
      setErrors({...errors, audDate:""});
      setFormData({formData, audDate: formattedDate});
    }
  }

  const handleWebsite = (event) => {
    const {value} = event.target;
    if (!validator.isURL(value)) {
      setErrors({...errors, website: "Website must be a valid URL."})
    }else{
      setErrors({...errors, website:""});
      setFormData({...formData, website: value});
    } 
  }

  const addAudition = async (e) => {
    e.preventDefault();
    const {position, ensemble, location, deadline, audDate, website} = formData;
    if (position && !errors.position && ensemble && !errors.ensemble && location && !errors.location && deadline && !errors.deadline && date && !errors.date && website && !errors.website) {
    const {error} = await supabase.from('auditions').insert({position: position, ensemble: ensemble, location: location, app_deadline: deadline, audition_date: date, orchestra_website: website});
    fetchAuditions();
    setFormData({position:"", ensemble:"", location:"", deadline: currentDate, audDate: currentDate , website:""});
    setErrors({position:"", ensemble:"", location:"", deadline:"", audDate:"", website:"", form:""});
    fetchAuditions();
    } else {
      setErrors({...errors, form:"Something is wrong with your form submission!" })
    }
  }
  return (
   <>
   <form onSubmit={addAudition}>
    <label htmlFor="position">Position Title</label>
    <input id="position" name="position" type="text" value={formData.position} onChange={handlePosition} />
    <label htmlFor="ensemble">Ensemble Group Name</label>
    <input id="ensemble" name="ensemble" type="text" value={formData.ensemble} onChange={handleEnsemble} />
    <label htmlFor="location">Location</label>
    <input id="location" name="location" type="text" value={formData.location} onChange={handleLocation} />
    <label htmlFor="deadline">Application Deadline</label>
    <input id="deadline" name="deadline" type="date" value={formData.deadline} onChange={handleDeadline} required />
    <label htmlFor="date">Audition Date</label>
    <input id="date" name="date" type="date" value={formData.audDate} onChange={handleDate} required/>
    <label htmlFor="website">Website</label>
    <input id="website" name="website" type="url" value={formData.website} onChange={handleWebsite}/>
    <section className="errors">
      <ul>
        {Object.values(errors).map((error, i) => (
          <li key={i}>{error}</li>
        )
      )}
      </ul>
    </section>
    <button>Add Audition</button>
   </form>
   </>
  )
}

export default Form