import React from 'react';
import Common from './Common';
import abt from '../src/images/About.jpg';



const About=()=>

{

    return(

      <>
       <Common
        headname="Welcome to About Page"
        imgsrc={abt} 
        visit="/contact"
        btnname="Contact Now" />

       </>



    );

}
export default About;