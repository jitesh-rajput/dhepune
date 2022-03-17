import firebase from "firebase";
import React,{ useState } from "react";

const AddNotice=(role)=>{
    role=role.role
    const [title, setTitle] = useState('');
    const [desc,setDesc] =useState('');
    const [link,setLink] =useState('');
    if(role==="Institute" || role==="Admin"){
        const ShareNotice=(e)=>{
            e.preventDefault();
            console.log(link,desc,title)
            firebase.firestore().collection(`${role}portal`)
            .doc().set({
                clgid:firebase.auth().currentUser.uid,
                title,
                desc,  
                link,
                clgname:'pccoer',
            })
        }
        return(
            <div className="row py-4">
            <form className="col-6 m-auto" onSubmit={ShareNotice}>
            <h5>Add Notice</h5>
                <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                </div>
                <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows={3}
                    onChange={(e) => setDesc(e.target.value) }
                    value={desc}
                />
                </div>
                <div className="form-group">
                <label>Link</label>
                <input type="text" className="form-control" 
                    onChange={(e) =>  setLink(e.target.value) }
                    value={link}
                />
                </div>
                <button className="btn btn-info mt-2">Share</button>
            </form>
            </div>
        )
    }
    else{
        return(
            ''
        )
    }
}

export default AddNotice;