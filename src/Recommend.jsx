import React from 'react';
import firebaseDb from './firebase';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar"
import ProductCarousel from "./ProductCarousel"
import DoneIcon from '@material-ui/icons/Done'
import {useHistory} from "react-router-dom";
import Container from "@material-ui/core/Container"


export default function Recommend(props) {


const[alvlue,updatedvalue]=React.useState({})

const[one,two]=React.useState([]);

const[final,ultra]=React.useState([]);

const history=useHistory();

const[valll,vallu]=React.useState(props.target)

  // reading value from database jai singh rathore.
console.log(valll);
  React.useEffect(()=>{
    
    firebaseDb.child(valll).on("value",snapshot=>{
        if(snapshot.val()!=null){
          updatedvalue({...snapshot.val()})
        }
    })
},[])


new Promise((resolve, reject)=>{
  Object.keys(alvlue).map((val)=>{
      one.push(alvlue[val])

 })
 resolve();
}).then(()=>{
  ultra(one);
})


// FILTER METHOD
        const rara=final.filter((val)=>{
          return (valll=="Television" || valll=="Cothes" || valll=="Mobile") ? val.sellers==props.writer : val.writer==props.writer 
        })
        var uniqueArray = rara.filter((item, pos)=>{
        return rara.indexOf(item) == pos;
        })
// FILTER METHOD
         
//history

const clicki=(a)=>{
    history.push("/insideproduct",a);
}

//history


    return (
        <>
          
        <div style={{padding:"0 0 0 36px",height:"518px",overflowX:"scroll",overflowY:"hidden"}}>

        {
            Object.keys(uniqueArray) && Object.keys(uniqueArray).length > 0 && Array.isArray(Object.keys(uniqueArray))?
              uniqueArray.map((row) => (
        <>
        <Container>
        <div  style={{width:"3200px"}}>
        <div style={{float:"left",marginRight:"10px"}}>
         <div style={{backgroundColor:"rgb(240, 240, 240)",height:"355px",width:"300px"}}>

         <div style={{height:"50px",marginBottom:"8px",margin:"0px"}}>
         <Avatar style={{position:"relative",top:"6px",left:"20px",backgroundColor:"red"}}><span style={{fontSize:"12px"}}>-{100-((Number(row.price)/(Number(row.price)+Number(row.off))*100).toFixed(0))}% </span></Avatar>
         </div>

        <div style={{position:"relative",right:"28px"}}>
        <ProductCarousel
        width="220px"
     image1={row.image}
     image2={row.image2} 

     />
        </div>
        <p onClick={()=>clicki(
          (props.target=="Television" && props.target=="Cothes" && props.target=="Mobile")?
          {
        id:row,
        image:row.image,
        image2:row.image2,
        item:row.item,
        sellers:row.sellers,
        price: row.price,
        off:row.off,
        description:row.description,
        about_seller:row.about_seller
        }
        :
       { id:row,
        image:row.image,
        image2:row.image2,
        item:row.item,
        writer:row.writer,
        price: row.price,
        off:row.off,
        description:row.description,
        author:row.author}
        )} className="jjj" style={{margin:"16px 0 0 0",cursor:"pointer"}}>{row.item}</p>

       </div>   
        <span style={{color:"silver",marginTop:"0px"}}>{  (valll=="Television" || valll=="Cothes" || valll=="Mobile")? row.sellers : row.writer}</span>
        <h3 style={{color:"#B12704",margin:"10px 0 0 0px"}}><sup>₹</sup>{row.price} <span style={{color:"silver",fontSize:"16px",textDecoration:"line-through"}}>  ₹{row.off}  </span> <span style={{color:"silver",fontSize:"16px",textDecoration:"none",marginLeft:"10px"}}> save({row.off}) {100-((Number(row.price)/(Number(row.price)+Number(row.off))*100).toFixed(0))}%</span></h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> </p>

    <span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal.</span>
        </div>
        </div>
        </Container>

        </>

              ))

     :
              "Loading..."
        }
</div>  
        </>
    )
}
