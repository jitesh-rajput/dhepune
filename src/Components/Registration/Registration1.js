import Header2 from "../constants/Header/Header2";
import React from "react";
import Alert from "../constants/Alert";
import { Link } from "react-router-dom";
class Registeration1 extends React.Component {
    constructor(props){
      super(props)
      this.state={
        name:'',
        email:'',
        password1:'',
        password2:'',
        loading:false,
        error:''
      }
      const setloading =()=>{
        this.setState({loading:true})
      }
      this.createAccount=(event)=>{
        event.preventDefault();
        if(this.state.password1!==this.state.password2){
          this.setState({error:"Password Must Be Same ..!"})
        }
        else{
            console.log(this.state)
         //this.setState({error: await CreateUser(this.state)}) 
        }
      }

    }
    render() {
      return(
          <div>
            <Header2/>
            <div className="sign-bg">
          <div className="row py-2">
            <div className="text-center py-2">
              <h2>Student Regesteration</h2>
            </div>

            <div>
            {this.state.error?<Alert error={this.state.error}/>:'' }
            </div>
            
            
            <form onSubmit={this.createAccount}>
            <div className="row">
            <div className="col-md-5 col-10 mx-4">
                  <div className="m-4">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                    required
                     />
                  </div>
                  <div className="m-4">
                    <label  className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                  required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password1"
                    value={this.state.password1}
                    onChange={(event) => this.setState({ password1: event.target.value })}
                    required
                   />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="Password2"
                    value={this.state.password2}
                    onChange={(event) => this.setState({ password2: event.target.value })}
                    required
                    />
                  </div>
                </div>

                <div className="col-md-5 col-10 mx-4">
                  <div className="m-4">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                    required
                     />
                  </div>
                  <div className="m-4">
                    <label  className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                  required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password1"
                    value={this.state.password1}
                    onChange={(event) => this.setState({ password1: event.target.value })}
                    required
                   />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="Password2"
                    value={this.state.password2}
                    onChange={(event) => this.setState({ password2: event.target.value })}
                    required
                    />
                  </div>
                </div>
                </div>
                </form>
        </div>
        <div className="text-center">
            <button disabled={this.state.loading} type="submit" className="btn btn-dark my-2 mx-5 px-5 py-2"><Link to="/home" className="text-white">Submit</Link></button>
        </div>
      </div>
      </div>
        
)
}}


export default Registeration1;