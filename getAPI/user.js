import axios from "axios";

const getUserDetails  = async () =>{
    try{
        let response = await axios.get("https://randomuser.me/api")
      
    }catch(error){
     
   throw error
    }
   

}

export default getUserDetails;