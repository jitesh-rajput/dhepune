
import React from "react";
import firebase from "firebase";
import { Navigate } from "react-router-dom";
import ShowHeader from "../constants/Header/ShowHeader";
class Discord extends React.Component{
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
            user:'none'
        }
    }
    render(){
        if(this.state.user===null){
            return(<Navigate to="/login" replace={true}/> )
        }
    else{
        if(this.state.user.displayName==="Student"){
        return(
            <div>
                <ShowHeader/>
                <div className="container pt-5 ">
                    <div className="row mt-5 ">
                    <h3 className="text-center pt-5">DEH Community</h3>
                    <div className="card border-dark mb-3 col-10 mt-2 m-auto" >
                        <div className="card-header text-center"><h5>Grp Name</h5></div>
                        <div className="card-body text-dark">
                        <h5 className="card-title">Username</h5>
                        <p className="card-text">
                            Messages
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        <h5 className="card-title">Username</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        </div>
                        <div className="card-footer">
                        <input type="text" id="inputPassword5" className="form-control" placeholder="Add Message Here ..."/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        }
        else{
         return (<h2 className='text-center py-5'>Permission Denied ..!</h2>)
        }
    }
}
}
export default Discord;