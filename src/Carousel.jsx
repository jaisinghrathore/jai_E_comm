import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import firebaseDb from "./firebase";

import CircularProgress from '@material-ui/core/CircularProgress';

var test=0;



function Carousel() {

  const[init,upda] = React.useState({});
 

  React.useEffect(()=>{

  return new Promise((resolve, reject)=>{
    firebaseDb.child("banner").on("value",snapshot=>{
  
      if(snapshot.val() !=null){
              // upda({...snapshot.val()})
              // setOpen(true);

               upda({...snapshot.val()});                      
      }
})

resolve();

  })
    // const val=(Object.keys(init).length);

},[])


 

  return (
    <>
     
     <div id="demo" class="carousel slide" data-ride="carousel">


{
    Object.keys(init) && Object.keys(init).length>0 && Array.isArray(Object.keys(init))?
          
          
          Object.keys(init).map((step,index) => (
        
index===Object.keys(init).length-1?
<div class="carousel-inner">
  <div class="carousel-item active" style={{width:"100%",height:"400px"}}>
    <img src={init[step].Banner1} alt="Chicago" width="100%" height="400px"/>
  </div>
  <div class="carousel-item"  style={{width:"100%",height:"400px"}}>
    <img src={init[step].Banner2} alt="New York" width="100%" height="400px"/>
  </div>
  <div class="carousel-item"  style={{width:"100%",height:"400px"}}>
    <img src={init[step].Banner3} alt="New York" width="100%" height="400px"/>
  </div>
  
  <div class="carousel-item"  style={{width:"100%",height:"400px"}}>
    <img src={init[step].Banner4} alt="New York" width="100%" height="400px"/>
  </div>

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
:
<></>

              )
          )

          :

          <>
          <div style={{width:"100vw",height:"120vh",position:"absolute",top:"-100px",display:"grid",placeItems:"center",zIndex:9999,backgroundColor:"white"}}>
              <CircularProgress color="secondary" />
              </div>
          </>
}

</div>

    </>
  );
}

export default Carousel;
