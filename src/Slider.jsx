import React from 'react'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



export default function Slider() {

    const[init,upda] =React.useState({
        namm:"See More",
        action:"none", 
        }
    );

    const clicky=()=>{
        init.namm==="See More"?
        upda({...init,["namm"]:"See Less",["action"]:"block"}):
        upda({...init,["namm"]:"See More",["action"]:"none"})
    }

    const clicky2=()=>{
        alert("dsa");
    }

    return (
        <>

        <div className="box" style={{width:"600px",border:"1px solid silver",borderRadius:"6px",marginTop:"40px",cursor:"pointer"}}>
       
        <div style={{height:"40px",width:"100%",borderBottom:"1px solid silver",boxSizing:"border-box",padding:"6px"}}>
        <LocalOfferIcon style={{color:"#B12704",float:"left",marginRight:"10px"}}/>
        <p><span style={{color:"#B12704"}}><b>Save Extra</b></span> with 4 offers</p>
        </div>
        
        <div style={{height:"61px",width:"100%",borderBottom:"1px solid silver",boxSizing:"border-box",padding:"6px"}}>
        <p><span style={{color:"#B12704"}}>Cashback (3):</span>  5% back with Amazon Pay ICICI Bank Credit card for Express-members. 3% back for everybody else </p>
        </div>

        <div style={{height:"61px",width:"100%",borderBottom:"1px solid silver",boxSizing:"border-box",padding:"6px",display:init.action}}>
        <p><span style={{color:"#B12704"}}>Bank Offer (3):</span> Get 5% up to Rs. 1500 Instant Discount on American Express Credit Card EMI transactions </p>
        </div>
        

        <div style={{borderBottom:"1px solid silver",height:"40px",width:"100%",boxSizing:"border-box",padding:"6px",display:init.action}}>
        <p><span style={{color:"#B12704"}}>No Cost EMI:</span>Avail No Cost EMI on select cards for orders above ₹3000</p>
        </div>
       
        <div style={{borderBottom:"1px solid silver",height:"61px",width:"100%",borderBottom:"1px solid silver",boxSizing:"border-box",padding:"6px"}}>
        <p><span style={{color:"#B12704"}}>Partner Offers:</span> Get GST invoice and save up to 28% on business purchases. Sign up for free </p>
        </div>
        

        <div style={{height:"40px",width:"100%",boxSizing:"border-box",padding:"6px"}}>
        <KeyboardArrowDownIcon style={{color:"#B12704",float:"left",marginRight:"10px"}}/>
        <p onClick={clicky} ><span style={{color:"#B12704"}}>{init.namm}</span></p>
        </div>


        </div>
        </>
    )
}
