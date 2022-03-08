import React from "react";
import Header from "../constants/Header/Header";
import { Link, Navigate } from "react-router-dom";

class Profile extends React.Component {
 
  constructor(){
    super()
    this.state={
      user:'',
      posts:[],
      following:0,
      logout:false
    }
  }
    render() {
      /* 
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
          */
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg cardcss">
        <div className="container-fluid pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-4 mt-3 py-2 m-auto bg-dark text-white">
              <div className="text-center">
                <img className="rounded-circle" src={this.state.user.profile_pic} height={150} width={150}/>
              </div>
    
              <div className="px-5 py-3">
                <h6 className="px-3"> Username :- <span>{this.state.user.username}</span></h6>
                <h6 className="px-5"> Name :- <span>{this.state.user.name}</span></h6>            
                <h6 className="px-5"> Branch :- <span>{this.state.user.branch}</span></h6>
                <Link className="link text-white text-decoration-none" to={`/profile/${this.state.user.uid}/userFollowing`}>
                <h6 className="px-5" > Friend :- <span>{this.state.following}</span></h6>            
                </Link>
                <h6 className="px-5"> Bio :- <span>{this.state.user.bio}</span></h6>
                <h6 className="px-5"> email :- <span>{this.state.user.email}</span></h6>
                <h6 className="px-5"> website :- <span><a href={`${this.state.user.website}`} target="_blank">{this.state.user.website}</a></span></h6>
                
                <div className="row">
                <div className="col-lg-6">
                <a className="col m-3 px-5 py-2 btn btn-primary" >Update Profile</a>
                </div>
                <div className="col-lg-6" >
                <a className="col m-3 px-5 py-2 btn btn-primary" >LogOut</a>
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
    }
  
  export default Profile

