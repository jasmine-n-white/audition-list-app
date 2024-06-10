import React from 'react'
import {useAuthContext} from '../Context/auth.context'
import {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import supabase from '../config/supabaseClient'
function Update() {
    const {auditionid} = useParams();
    const navigate = useNavigate();
    const {formData, setFormData, errors, setErrors, posts, setPosts} = useAuthContext();

    useEffect (() => {
      fetchAuditions();
    }, [])

  const fetchAuditions = async () => {
    const {data, error} = await supabase.from('auditions').select();
    if (error) {
      console.log(error);
    }
    setPosts(data);

  }
    useEffect (() => {
        const fetchAudition = async () => {
            try {
                const {data} = await supabase.from('auditions').select().eq("id", auditionid).single();
                if (data) {
                    setFormData({...formData, position: data?.position, ensemble: data?.ensemble, location: data?.location, deadline: data?.app_deadline, audDate: data?.audition_date, website: data?.orchestra_website});
                } else {
                    navigate("/", {replace: true});
                }
            } catch (error) {
                console.log("error fetching audition data: ", error);
                navigate("/", {replace: true});
            }
        };
        fetchAudition();
      }, [auditionid])
    
    
      const handlePosition = (event) => {
        const {value} = event.target;
        if (value.length < 2) {
          setErrors({...errors, position:"Position Title is required."});
        } else {
          setErrors({...errors, position:""});
        }
          setFormData({...formData, position: value});
        
      }
    
      const handleEnsemble = (event) => {
        const {value} = event.target;
        if (value.length < 2) {
          setErrors({...errors, ensemble:"Ensemble Name is required."});
        } else {
          setErrors({...errors, ensemble:""});
        }
          setFormData({...formData, ensemble: value});
        
      }
       const handleLocation = (event) => {
        const {value} = event.target;
        if (value.length < 2) {
          setErrors({...errors, location:"Ensemble Name is required."});
        } else {
          setErrors({...errors, location:""});
        }
          setFormData({...formData, location: value});
        
      }
    
      const date = new Date();
      const currentDate = date.toISOString().split('T')[0];
    //working on getting selected date to be chosen
      const handleDeadline = (event) => {
        const {value} = event.target;
        if (value < currentDate){
          console.log("Too early");
          setErrors({...errors, deadline:"Application Deadline must be a valid date."});
        } else {
          setErrors({...errors, deadline:""});
        }
          setFormData({...formData, deadline: value});
        
      }
    
      const handleDate = (event) => {
        const {value} = event.target;
        if (value < currentDate){
          console.log("Too early");
          setErrors({...errors, audDate: "Audition Date must be a valid date."});
        } else {
          setErrors({...errors, audDate:""});
        }
          setFormData({...formData, audDate: value});
        
      }
    
      const handleWebsite = (event) => {
        const {value} = event.target;
        if (!validator.isURL(value)) {
          setErrors({...errors, website: "Website must be a valid URL."})
        }else{
          setErrors({...errors, website:""});
        }
          setFormData({...formData, website: value});
        
      }
    
      const {position, ensemble, location, deadline, audDate, website} = formData;
      const invalid = !position||errors.position||!ensemble||errors.ensemble||!location||errors.location||errors.deadline||errors.audDate||!website||errors.website;
      const updateAudition = async (e) => {
        e.preventDefault();
        if (invalid)  {
          setErrors({...errors, form:"Something is wrong with your form submission!" });
          return;
        } 
        const {data, error} = await supabase.from('auditions').update({position: position, ensemble: ensemble, location: location, app_deadline: deadline, audition_date: audDate, orchestra_website: website}).eq("id", auditionid);
        fetchAuditions();
        if (error) {
            console.log(error)
        } else {
            setFormData({position:"", ensemble:"", location:"", deadline: currentDate, audDate: currentDate , website:""});
            setErrors({position:"", ensemble:"", location:"", deadline:"", audDate:"", website:"", form:""});
            navigate("/auditionList");
        }
        
        
      
      }
    
    return (
        <>
        <form onSubmit={updateAudition}>
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
         <button>Update Audition</button>
        </form>
        </>
       )
}

export default Update