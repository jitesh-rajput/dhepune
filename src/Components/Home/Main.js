
import React from "react";
import Header from "../constants/Header/Header";

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="container pt-5 ">
                    <div className="row mt-5 ">
                    
                    <div className="card border-dark mb-3 col-10 col-sm-5 mt-5 mx-4" >
                        <div className="card-header text-center"><h5>College Portal</h5></div>
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
                </div>
            </div>
        )
    }
}
export default Main;