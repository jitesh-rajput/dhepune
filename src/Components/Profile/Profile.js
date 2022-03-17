import React from "react";
import Header from "../constants/Header/Header";
import { Link, Navigate } from "react-router-dom";
import firebase from "firebase";
import Permission from "../constants/Permision";

class Profile extends React.Component {
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("Authenticated")
          this.setState({user:user})
        } else {
          console.log("Not Authenticated")
          this.setState({user:null})
        }
      });
}
  constructor(){
    super()
    this.state={
      user:'user',
      logout:false
    }
  }
    render() {
      const LogOut=(e)=>{
        e.preventDefault();
        sessionStorage.clear();
        firebase.auth().signOut();
        console.log("User Signed Out !")
        this.setState({logout:true})
      }

      if(this.state.user===null){
        return(<Navigate to="/login" replace={true}/> )
      }
      else{
        console.log(this.state.user)
      const LogOut=(e)=>{
        e.preventDefault();
        sessionStorage.clear();
        firebase.auth().signOut();
        console.log("User Signed Out !")
        this.setState({logout:true})
      }
      if(this.state.logout){
        return(<Navigate to="/login" replace={true} />)
      }
      else{
      if(this.state.user.displayName==="Student")
      {
      return(
      <div>
      <Header/>
      <div className="container-fluid">
        <div className="container-fluid pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-4 mt-3 py-2 m-auto">
              <div className="text-center">
                <img className="rounded-circle" src={this.state.user.profile_pic} height={150} width={150}/>
              </div>
    
              <div className="px-5 py-3">

              <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Sir Name</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">Middle Name</th>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">College</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">Stream</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Passing Out Date </td>
                </tr>
                <tr>
                  <th scope="row">Occupation</th>
                  <td>Jacob</td>
                </tr>
             
              </tbody>
            </table> 
                <div className="row">
                <div className="col-lg-6">
                <a className="col m-3 px-5 py-2 btn btn-info" >Update Profile</a>
                </div>
                <div className="col-lg-6" >
                <a className="col m-3 px-5 py-2 btn btn-info" onClick={LogOut} >LogOut</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
    else{
      return(<Permission/>)
    }
  }
  }
}
}
  
  export default Profile;

