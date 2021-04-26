import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip';

export default function Delivery() {
    return (
        <>
        <Grid container style={{marginTop:"30px"}}>

        <Tooltip  style={{cursor:"pointer"}} title="Pay on Delivery (Cash/Card) payment method includes Cash on Delivery (COD) as well as Debit card / Credit card / Net banking payments at your doorstep." arrow>
        <Grid xs={3}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" height="50" style={{marginLeft:"50%",transform:"translate(-50%,0)",marginBottom:"10px"}} ></img>
            <p style={{textAlign:"center",fontSize:"12px"}}>Pay on Delivery</p>
        </Grid>
        </Tooltip>

        <Tooltip  style={{cursor:"pointer"}} title="This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. Please keep the item in its original condition, with outer box or case, accessories, CDs, user manual, warranty cards, scratch cards, and other accompaniments in manufacturer packaging for a successful return pick-up. We may contact you to ascertain the damage or defect in the product prior to issuing replacement." arrow>
        <Grid xs={3}>
        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" height="50" style={{marginLeft:"50%",transform:"translate(-50%,0)",marginBottom:"10px"}}/>
            <p style={{textAlign:"center",fontSize:"12px"}}>10 Days Replacement Only</p>
        </Grid>
        </Tooltip>

        <Tooltip  style={{cursor:"pointer"}} title="PerfectLegal directly manages delivery for this product. Order delivery tracking to your doorstep is available." arrow>
        <Grid xs={3}>
        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" height="50" style={{marginLeft:"50%",transform:"translate(-50%,0)",marginBottom:"10px"}}/>
            <p style={{textAlign:"center",fontSize:"12px"}}>PerfectLegal Delivered</p>
        </Grid>
        </Tooltip>

        <Tooltip  style={{cursor:"pointer"}} title="Delivery Associate will place the order on your doorstep and step back to maintain a 2-meter distance.No customer signatures are required at the time of delivery.For Pay-on-Delivery orders, we recommend paying using Credit card/Debit card/Netbanking via the pay-link sent via SMS at the time of delivery. To pay by cash, place cash on top of the delivery box and step back." arrow>
        <Grid xs={3}>
        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png" height="50" style={{marginLeft:"50%",transform:"translate(-50%,0)",marginBottom:"10px"}}/>
            <p style={{textAlign:"center",fontSize:"12px"}}>No-Contact Delivery</p>
        </Grid>
        </Tooltip>

        </Grid>
        </>
    )
}
