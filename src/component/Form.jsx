import React from 'react'
import './Form.css'
function Form() {
   const handleSubmit = (e) =>{
       e.preventDefault();
   }
  return (
    <div className='container'>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                 />
         </div>
         <div>
         <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  
                />
         </div>
         <div>
         <label htmlFor="type" id='Select'>Type of enquiry</label>
                <select id="type"  name="type">
                  <option bg={"black"} value="hireMe">Freelance project proposal</option> 
                  <option bg={"black"} value="openSource">
                    Open source consultancy session
                  </option>
                  <option bg={"black"} value="other">Other</option>
                </select>
         </div>

         <div>
         <label htmlFor="comment">Your message</label>
                <textarea
                  id="comment"
                  name="comment"
                  height={250}
                  
                />
         </div>
         <div>
         <button
               type="submit">
                Submit
              </button>
         </div>      
        </form>
    </div>
  )
}

export default Form


