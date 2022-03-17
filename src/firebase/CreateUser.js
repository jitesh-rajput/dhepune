import firebase from "firebase"
require('firebase/firestore')

 const CreateUser=(props)=> {
    console.log(props);
    let err=''
         const { branch,colleage,mname, name , occupation ,pdate,sirname,email, password1 ,error,loading } = props;
         console.log(branch,colleage,mname, name , occupation ,pdate,sirname,email, password1 ,error,loading )
        
        err= firebase.auth().createUserWithEmailAndPassword(email, password1)
              .then((usercredential) => {
                const user=firebase.auth().currentUser
                firebase.auth().currentUser.updateProfile({displayName:"Student"}).then(()=>{
                    console.log(firebase.auth().currentUser.displayName)
                   })
                console.log("Somethis is going on - ")
                 firebase.firestore().collection("students")
                      .doc(firebase.auth().currentUser.uid)
                      .set(
                          {
                              uid:firebase.auth().currentUser.uid,
                              profile_pic: "https://firebasestorage.googleapis.com/v0/b/pccoer-web-d4e66.appspot.com/o/icons%2Fprofile.png?alt=media&token=20ea9a22-db9b-421f-a48c-8d379cf23bee",
                              email,
                              name,
                              sirname,
                              mname,
                              occupation,
                              branch,
                              colleage,
                              pdate
                          }
                      )
                      
                 console.log(user)
                 user.sendEmailVerification().then(()=>{
                     console.log("Check email")
                 })
                .catch((error) => {
                console.log(error.message)
                return error.message
                }) 
                 console.log(firebase.auth().currentUser.emailVerified)
                 //return "Account Created"
                return "Please Verify your Email.."
              
              /*
               firebase.auth().currentUser.updateProfile({displayName:"Institute"}).then(()=>{
                    console.log(firebase.auth().currentUser.displayName)
                   })
              firebase.firestore().collection("Institutes")
              .doc(firebase.auth().currentUser.uid)
              .set(
                  {
                      uid:firebase.auth().currentUser.uid,
                      email,
                      clgname:'pccoer',
                  }
              )
              .then(()=>{
                return "Please Verify your Email.."
              })
              */
        
           
        })
    }

export default CreateUser;