import React from 'react';
import {NavLink} from 'react-router-dom';

const Cards=(props)=>
{


return(

    <>
              
                  <div className="col-md-4 mt-3"> 
                  <div className="card w-100">
                <img src={props.imgs} className="card-img-top img-fluid" alt="Service_img" />
                 <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" className="btn btn-outline-primary">Click Now</NavLink>
                 </div>
                </div>

                </div>


             

             



</>








);





}

export default Cards;