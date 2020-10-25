import React from 'react'; 
import { useState } from 'react';



const Contact=()=>
{
 const [data , setData]=useState(
                                 {

                                fullname:"",
                                number:"",
                                email:"",
                                message:""

                                }

                            );


const InputEvent=(event)=>
{
  
const {name , value}=event.target;

 setData((preval)=>
{
return{
    ...preval,
    [name]:value,
}

}

);

};



const formsubmit=(e)=>

{
   e.preventDefault();

   

   
  alert(`   Your name is ${data.fullname} 
     Your mobile number is ${data.number}
     Your mail id is ${data.email}
     Now here what you want to say--- ${data.message}`) 

};


    return(
         <>
           <div className="my-4">
               <h3 className="text-center contact_title">Contact Us</h3>
           </div>
        
        <div className="container contact_div mb-4">
          <div className="row">
              <div className="col-10 col-md-6 mx-auto">
           
             <form onSubmit={formsubmit}>
    
    <div className="form-group mb-3">
    <label for="formGroupExampleInput">Enter Your Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"  
    name="fullname" value={data.fullname} onChange={InputEvent} />
  </div>

  <div className="form-group mb-3">
    <label for="formGroupExampleInput">Enter Your Number</label>
    <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Number" 
    name="number" value={data.number} onChange={InputEvent} />
  </div>

  <div className="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email Address" 
    name="email" value={data.email} onChange={InputEvent} />
      </div>

  <div className="form-group mb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
    name="message" value={data.message} onChange={InputEvent} ></textarea>
  </div>

  
   
  <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>

       
       
         </div>
         </div>
         </div>
     

</>
    )
}
export default Contact;
