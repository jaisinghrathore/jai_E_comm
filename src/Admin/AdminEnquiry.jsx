import React from 'react';
import Nav from "./AdminNAv";
import firebaseDb from "../firebase";

export default function AdminEnquiry() {


        var valInc=0;


    const[init,upda]=React.useState({});


React.useEffect(() =>{

    return new Promise((resolve, reject)=>{

        firebaseDb.child('productsAddress').on("value", snapshot=>{

            if(snapshot.val() !=null){
               upda(snapshot.val())
            }
    })

    resolve();
    
    }).then(()=>{
        
    })








},[])
    





    return(
        <>

        <Nav/>
          
          
          {/* table start */}


          <div className="table-responsive">
  
    <table class="table table-bordered">
    <thead>
      
      <tr>
        <th  style={{textAlign:"center"}}>S No.</th>
        <th  style={{textAlign:"center"}}>Name</th>
        <th  style={{textAlign:"center"}}>phone no_</th>
        <th  style={{textAlign:"center"}}>Pincode</th>
        <th  style={{textAlign:"center"}}>Email</th>
        <th  style={{textAlign:"center"}}>Line 1</th>
        <th  style={{textAlign:"center"}}>Line 2</th>
        <th  style={{textAlign:"center"}}>Product Id_</th>
      </tr>

    </thead>
    <tbody>

{
    Object.keys(init) && Object.keys(init).length>1 && Array.isArray(Object.keys(init))?
    Object.keys(init).map((val)=>(
        <tr>

        <td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{valInc+=1}</div></td>
        <td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].namee}</div></td>
<td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].phone}</div></td>
<td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].pincode}</div></td>
<td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].email}</div></td>
<td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].line1}</div></td> 
<td><div  style={{width:"300px",height:'30px',overflow:'hidden',textOverflow: 'ellipsis',whiteSpace:"nowrap",textAlign:"center"}}>{init[val].line2}</div></td>
<td  data-toggle="tooltip" title="scroll right to see more!" ><div className="barrr" style={{height:'30px',width:"300px",overflow:'scroll',textAlign:"center",whiteSpace:"nowrap",cursor:'pointer'}}>{init[val].propductsId.replace('[', "").replace(']', "")} </div></td>

        </tr>
    ))

    :
    <>
    <h4>Loading</h4>
    </>
    
 }
  </tbody>


  </table>
</div>




        </>
    )
}
