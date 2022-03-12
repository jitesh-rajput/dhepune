
import React from "react";
import Header from "../constants/Header/Header";
import firebase from "firebase";
import { Navigate } from "react-router-dom";
import { FaEyeSlash ,FaEye,FaRegEdit,FaTrash ,FaSave} from "react-icons/fa";

const Portalcard=()=>{
    return(
    <div className="py-2">
        <div className="d-flex justify-content-between">
        <h5 className="card-title l-0">Dark card title</h5>
        <span><FaTrash size={15} color="red"/></span> 
        </div>
        <p className="card-text">
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
            
        </p>
    </div>
    )
}

class Main extends React.Component{
    componentDidMount(){
        /*firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log("Authenticated")
              this.setState({user:user})
            } else {
              console.log("Not Authenticated")
              this.setState({user:null})
            }
          });*/
    }
    constructor(){
        super()
        this.state={
            user:'none'
        }
    }
    render(){
        console.log(this.state.user)
        if(this.state.user===null){
            return(<Navigate to="/login" replace={true}/> )
        }
        else{
        return(
            <div>
                <Header/>
                <div className="container pt-5 ">
                
                    <div className="row mt-5 ">
                    <div className="card border-dark mb-3 col-10 col-sm-5 mt-5 mx-4" >
                        <div className="card-header text-center"><h5>College Portal</h5></div>
                        <div className="card-body text-dark">
                        <Portalcard/>
                        <Portalcard/>
                   
                        </div>
                    </div>
                  
                    <div className="card border-dark mb-3 col-10 col-sm-5 mt-5 mx-4" >
                        <div className="card-header text-center"><h5>University Portal</h5></div>
                        <div className="card-body text-dark">
                        <h5 className="card-title">Dark card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        <h5 className="card-title">Dark card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        <h5 className="card-title">Dark card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        </div>
                    </div>
                    </div>
                <div className="row py-4">
                <form className="col-6 m-auto">
                <h5>Add Notice</h5>
                    <div className="form-group">
                    <label>Title</label>
                    <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows={3} defaultValue={""} />
                    </div>
                    <button className="btn btn-info mt-2">Share</button>
                </form>
                </div>

                </div>
            </div>
        )
    }
}
}
export default Main;