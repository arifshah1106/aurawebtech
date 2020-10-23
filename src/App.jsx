import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/jquery/dist/jquery'; 
import  "./index.css";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch ,Route ,Redirect} from 'react-router-dom';



const App=()=>{

return(

<>
 <Navbar />


<Switch>
  <Route  exact path="/" component={Home} />
  <Route   path="/service" component={Service} />
  <Route   path="/about" component={About}  />
  <Route   path="/contact" component={Contact}  />
  <Redirect to="/" />

 

</Switch>

   <Footer/>
</>

)




};

export default App;