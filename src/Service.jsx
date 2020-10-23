import React from 'react';
import Cards from './Cards';
import Cdata from './Cdata';






const Service=()=>
{
    return(
   
      <>
            <div className="my-5">
                <h3 className="text-center service_title">Our Services</h3>
            </div>

           <section id="header-service" className="d-flex align-item-center">

           <div className="container">
            <div className="row ">

           <div className="container-fluid ">
            <div className="row">

              <div className="col-10 mx-auto" >
              <div className="row cards1">
                  {
                      Cdata.map( (val,ind)=>
                      {
                          return(<Cards key={ind} imgs={val.cimg} title={val.ctitle}/>);
                      }



                      )

                  }     
              


           </div>
            
               </div>
               </div>
             </div >
           
            </div>
            </div>

   
        </section>




             


 </>



    )
}

export default Service;
