import Header from "./Header";
import ClgHeader from "./ClgHeader";
import AdminHeader from "./AdminHeader";

const ShowHeader=(user)=>{
    user=user.user;
    console.log(user)
    if(user==="Student"){
        return (<Header/>)
    }
    if(user==="Institute"){
        return(<ClgHeader/>)
    }
    if(user==="admin"){
        return(<AdminHeader/>)
    }
    else{
        return(<Header/>)
    }
}
export default ShowHeader;