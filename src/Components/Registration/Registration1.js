import Header2 from "../constants/Header/Header2";
import React from "react";
import Alert from "../constants/Alert";
import Select from 'react-select';
import CreateUser from "../../firebase/CreateUser";

class Registeration1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sirname: '',
      name: '',
      mname: '',
      branch: '',
      pdate: Date(),
      colleage: '',
      occupation: '',
      email: '',
      password1: '',
      password2: '',
      loading: false,
      error: ''
    }
    const setloading = () => {
      this.setState({ loading: true })
    }
    this.createAccount = async(event) => {
      event.preventDefault();
      if (this.state.password1 !== this.state.password2) {
        this.setState({ error: "Password Must Be Same ..!" })
      }
      else {
        console.log(this.state)
        this.setState({error: await CreateUser(this.state)}) 
        //console.log(CreateUser(this.state))
      }
    }
  }
  render() {
    const stream = [
      { label: "Arts", value: 1 },
      { label: "Science", value: 2 },
      { label: "Law", value: 3 },
      { label: "Engineering", value: 4 },
    ]
    const branch = [
      { label: "Computer Engineering", value: 1 },
      { label: "Electrical Engineering", value: 2 },
      { label: "Electronics and Telecommunication", value: 3 },
      { label: "Mechanical Engineering ", value: 4 },
      { label: "Civil Engineering ", value: 5 }
    ];
    const university = [
      { label: "Mumbai University, Mumbai", value: 1 },
      { label: "S.N.D.T. University, Mumbai", value: 2 },
      { label: "Savitribai Phule Pune University, Pune", value: 3 },
      { label: "Shivaji University, Kolhapur ", value: 4 },
      { label: "Solapur University, Solapur", value: 5 },
      { label: "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad", value: 6 },
      { label: "Swami Ramanand Teerth Marathwada University, Nanded", value: 7 },
      { label: "North Maharashtra University, Jalgaon", value: 8 },
      { label: "Sant Gadge Baba Amravati University, Amravati ", value: 9 },
      { label: "Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur", value: 10 },
      { label: "Gondwana University, Gadchiroli", value: 11 },
      { label: "Kavi Kulguru Kalidas Sanskrit University, Ramtek Dist. Nagpur", value: 12 },
      { label: "Yashwantrao Chavan Open University, Nashik", value: 13 },
    ]
    return (
      <div>
        <Header2 />
        <div className="sign-bg">
          <div className="row py-2">
            <div className="text-center py-2">
              <h2>Student Regesteration</h2>
            </div>

            <div>
              {this.state.error ? <Alert error={this.state.error} /> : ''}
            </div>


            <form onSubmit={this.createAccount}>
              <div className="row">
                <div className="col-md-5 col-10 mx-4">
                  <div className="m-4">
                    <label className="form-label">Sirname</label>
                    <input type="text" className="form-control" 
                      value={this.state.sirname}
                      onChange={(event) => this.setState({ sirname: event.target.value })}
                      required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                      value={this.state.name}
                      onChange={(event) => this.setState({ name: event.target.value })}
                      required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Middle Name</label>
                    <input type="text" className="form-control"
                      value={this.state.mname}
                      onChange={(event) => this.setState({ mname: event.target.value })}
                      required
                    />
                  </div>

                  <div className="dropdown m-4 text-center">
                    <Select options={stream}
                      value={this.state.branch}
                      onChange={(value) => this.setState({ branch: value })}
                      placeholder="Select Stream"
                      required
                    />
                  </div>

                  <div className="m-4">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp"
                      value={this.state.email}
                      onChange={(event) => this.setState({ email: event.target.value })}
                      required
                    />
                  </div>

                </div>

                <div className="col-md-5 col-10 mx-4">
                  <div className="m-4">
                    <label htmlFor="startDate">Passing Out Date</label>
                    <input id="startDate" className="form-control" type="date"></input>
                  </div>

                  <div className="dropdown m-4 text-center">
                    <Select options={university}
                      value={this.state.colleage}
                      onChange={(value) => this.setState({ colleage: value })}
                      placeholder="Select University"
                      required
                    />
                  </div>

                  <div className="m-4">
                    <label className="form-label">Current Occupation</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                      value={this.state.occupation}
                      onChange={(event) => this.setState({ occupation: event.target.value })}
                      required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" 
                      value={this.state.password1}
                      onChange={(event) => this.setState({ password1: event.target.value })}
                      required
                    />
                  </div>
                  <div className="m-4">
                    <label className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" 
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
            <button disabled={this.state.loading} onClick={this.createAccount} type="submit" className="btn btn-dark my-2 mx-5 px-5 py-2">Submit</button>
          </div>
        </div>
      </div>

    )
  }
}


export default Registeration1;