import firebase from 'firebase';
import { useState } from 'react';
require('firebase/firestore')
require('firebase/firebase-storage')

 const ShareTweet =(params) => {
    //const [err,setError]=useState('') // Not Working 
    console.log(params)
    const {caption,img,url,error,user,profile,username}=params;
    if(img){
    const imgUrl = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
    const fileMetaData = { contentType: 'image/jpeg' };

    const task = firebase.storage().ref(imgUrl)
    const uploadTask = task.put(img,fileMetaData);
    uploadTask.on("state_changed",console.log(),console.error(),()=>{
        task.getDownloadURL()
        .then((link)=>{
            console.log(link)
            firebase.firestore()
                .collection('tweets')
                .add(
                    {
                        uid:firebase.auth().currentUser.uid,
                        post:link,
                        caption,
                        creation:firebase.firestore.FieldValue.serverTimestamp(),
                        profile,
                        username,
                        url
                    }
                )
                .then(function () {
                    console.log("Post uploaded");
                   // setError("Post Uploaded")
                }
                )
        })
    })

}
else if(caption){
    firebase.firestore()
                .collection('tweets')
                .add(
                    {
                        uid:firebase.auth().currentUser.uid,
                        caption,
                        creation: firebase.firestore.FieldValue.serverTimestamp(),
                        profile,
                        username,
                        url
                    }
                )
                .then(function () {
                    console.log("Tweet Uploaded");
                   // setError("Tweet Uploaded")
                    //console.log(err)
                }
                )
    }
//console.log(err)
//return err
 }
export default ShareTweet;
