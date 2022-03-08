
import React from "react";
import Header from "../constants/Header/Header";

class Discord extends React.Component{
    render(){
        return(
            <div>
                <Header/>
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
                        <div class="card-footer">
                        <input type="text" id="inputPassword5" class="form-control" placeholder="Add Message Here ..."/>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Discord;