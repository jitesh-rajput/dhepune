import firebase from "firebase"

const CheckLogin=async(data)=> {
    let err,isValide;
    const { email, password } = data;
    if(email){
        await firebase.firestore().collection('students')
        .where("email","==",email)
        .get().then((snapshot) => {
           isValide = snapshot.docs.map(doc => {
               console.log(doc.data)
              return doc.data().isVerified
          })
         console.log(isValide)
         err=isValide[0]==='true'?'':"Account Verfication Pending .. "
         err=isValide[0]==="block"?'Institute Block Your Request ..!':''
      })
      console.log(err)
    }
    console.log(isValide)
    if(!err){
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((results) => {
           console.log(results)
           const user=firebase.auth().currentUser
           console.log(user.emailVerified)
           if(user.emailVerified){
            /* firebase.auth().currentUser.updateProfile({displayName:"Institute"}).then(()=>{
                console.log(firebase.auth().currentUser.displayName)
               })
               
             firebase.auth().currentUser.updateProfile({displayName:"Student"}).then(()=>{
                console.log(firebase.auth().currentUser.displayName)
               })
               */
    
            err="Login"
           }
           else{
               user.sendEmailVerification(()=>{
                console.log("Verify Your Email ..")
               })
               err="Verify Your Email .."
           }
        })
        .catch((error) => {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                err="No User Found";
                //setLoading(false)
            }
            else if (error.message === "The email address is badly formatted.") {
                err="Please enter valid mail"
            }
            else {
                console.log(error.message)
                err=error.message;
                //setLoading(false)
            }
        })
    }
    console.log(err)
    return err
    
}

export default CheckLogin;