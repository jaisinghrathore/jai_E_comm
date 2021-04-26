import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Products from "./Products";
import Adminlogin from "./Admin/AdminLogin";
import AdminData from "./Admin/Add_Data";
import AdminDocs from "./Admin/AdminDocs";
import InsideProduc from "./InsideProduct";
import adminEnquiry from "./Admin/AdminEnquiry";
import Footer from "./Footer";
import Buy from "./UserInfo";
import Cart from "./Cart";
import Success from "./Success";
import AddBanner from "./Admin/AddBanner"
const App=()=>{

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

console.log(localStorage.getItem('success'));

  return(
    <>

    {localStorage.getItem("login")=="423485479543945438594358" && localStorage.getItem("login")?

    <Switch>
    <Route exact path="/add_data" component={AdminData}/>
    <Route exact path="/add_banner" component={AddBanner}/>
    <Route exact path="/admindocs" component={AdminDocs}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/insideproduct" component={InsideProduc}/>
    <Route exact path="/enquiry" component={adminEnquiry}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/success" component={Success}/>
    <Route exact path="/cart/:address" component={Buy}/>
    <Redirect to="/products"></Redirect>
    </Switch>

    :
    

    <Switch>
    <Route exact path="/admin" component={Adminlogin}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/insideproduct" component={InsideProduc}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/success" component={Success}/>
    <Route exact path="/cart/:address" component={Buy}/>
    <Redirect to="/products"></Redirect>
    </Switch>
    }



    <Footer/>

    </>
  );
}

export default App;