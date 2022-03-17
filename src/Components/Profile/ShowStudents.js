import ShowHeader from '../constants/Header/ShowHeader';
import React from 'react';
import firebase from 'firebase';
import { Navigate } from 'react-router-dom';
import VerifyCard from './VerifyCard';

class ShowStudents extends React.Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log("Authenticated")
              this.setState({user:user})
              firebase.firestore().collection('students')
              .doc().get().then((data)=>{
                  console.log(data)
              })
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
        if(this.state.user.displayName==="Institute"){
        return(
            <div>
                <ShowHeader user={this.state.user.displayName}/>
            <div className="container py-5">
            <h3 className="pt-5 text-center mt-3">ALL Alumni Students </h3>
            <div className="row py-3">
                <div className="col-sm-6 px-5">
                <form className="d-flex">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Name"
                aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                    Search
                </button>
                </form>
                </div>

                <div className="col-sm-6 px-5">
                <form className="d-flex">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Stream"
                aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                    Search
                </button>
                </form>
                </div>

                <div className="col-sm-6 px-5 pt-2">
                <form className="d-flex">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search By Year"
                aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                    Search
                </button>
                </form>
                </div>
            </div>

            <div className="row pt-4">
                <VerifyCard/>
            </div>
            </div>
            </div>
        )
    }
    else{
        return (<h1 className='text-center'>Permission Denied ..!</h1>)
    }
}
}
}

export default ShowStudents;