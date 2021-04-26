import React,{useState} from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Footer() {
    const[val,valupd]=useState("block")
    const[init,upda]=useState([]);
    const[prev,nau]=useState();

        window.onscroll=()=>{
            // if(window.scrollY>800){

            //    upda("none");
            //   }else if(window.scrollY<800){
            //     upda("block");
            //   }
                init.push(window.scrollY);
                upda(init);

                nau(init.length-1);

                if(init[prev]<window.scrollY){
                    valupd("none");
                }else if(init[prev]>window.scrollY){
                    valupd("block");
                }

                // console.log("old"+init[prev]);
                // console.log("new"+window.scrollY);
        }

       
        const upper=()=>{
            
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

        }





    return (
        <div>
                      <div style={{backgroundColor:"#0F1111",height:"60px",width:"100%",display:val,alignItems:"center",justifyContent:"center",paddingTop:"10px",position:"fixed",bottom:"0px"}}>
                      
                      <div style={{width:"45px",height:"45px",backgroundColor:"grey",position:"absolute",right:"10px",top:"10%",display:"grid",placeItems:"center",cursor:"pointer",boxShadow: "5px 5px 5px rgba(1,1,1,0.6) inset",borderRadius: "10px"}}  onClick={()=>upper()} >
                                <ArrowUpwardIcon style={{color:"white",fontSize:"40px",marginLeft:"4px"}} />
                      </div>
  
  <p style={{color:"white",textAlign:"center",wordSpacing:"2px"}}>@ copyright by perfect all rights reserved</p>

</div>            

        </div>
    )
}
