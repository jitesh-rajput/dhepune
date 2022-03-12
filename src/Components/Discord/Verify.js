import Header from "../constants/Header/Header";
import React from 'react';

const VerifyCard=()=>{
    return(
        <div className="col-sm-4 py-3">
                <div className="card">
                <div className="card-body">
                    <div className="text-center pb-2">
                    <img
                    height={100}  
                    src='https://firebasestorage.googleapis.com/v0/b/pccoer-web-d4e66.appspot.com/o/icons%2Fprofile.png?alt=media&token=20ea9a22-db9b-421f-a48c-8d379cf23bee'
                    className="rounded-circle"
                    />
                    </div>
                    <h5 className="card-title text-center">Name MiddleName SirName</h5>
                    <p className="card-text">
                    <table className="table">
                    <tbody>
                        <tr>
                        <th scope="row">Colleage </th>
                        <td>Pimpari Chinchwad Colleage of Engineering and Research</td>
                        </tr>
                        <tr>
                        <th scope="row">Stream</th>
                        <td>Science</td>
                        </tr>
                        <tr>
                        <th scope="row">Email</th>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <th scope="row">Occupation</th>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">PassOut Date</th>
                        <td>Thornton</td>
                        </tr>
                    </tbody>
                    </table>
                    </p>
                    <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-danger">
                    Reject
                    </a>
                    <button className="btn btn-info">Verify</button>
                    </div>
                </div>
                </div>
            </div>
    )
}
class Verify extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <div className="container py-5">
            <h3 className="pt-5 text-center mt-3">Verify Alumni Students </h3>
                <div className="row pt-4">
                <VerifyCard/>
                <VerifyCard/>
                <VerifyCard/>
                <VerifyCard/>
                </div>
            </div>
            </div>
        )
    }
}

export default Verify;