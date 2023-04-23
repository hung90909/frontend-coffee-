import { Text, TouchableOpacity, Image } from "react-native";
import { TextInput, View, } from "react-native";
import React, { useState , useEffect} from "react";
import { icon, image } from "../conten"
import { isValidEmail, isValidPassword, isValidREpassword } from "../check/Validate"
// import { Auth , firebaseDatabase, createUserWithEmailAndPassword } from "../firebase/firebase";
export default function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorRePassword, setErrorRePassword] = useState("")
 
    return (
        <View style={{ flex: 100, backgroundColor: "#d2691e" }}>
            <View style={{
                flex: 30,
                flexDirection: "row", justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    flex: 1, color: "white", fontSize: 25, fontWeight: "bold",
                    marginLeft: 20
                }}>Here's your first step with us!</Text>
                <Image style={{ flex: 2, tintColor: "white" }} source={image.logo} />
            </View>

            <View style={{
                flex: 50, backgroundColor: "white", marginHorizontal: 20, padding: 20,
                borderRadius: 20
            }}>
                <Text style={{ color: "#d2691e" }}>Email:</Text>
                <TextInput placeholder="vahungcoffee@gmail.com" 
                onChangeText={(text)=>{
                  if(isValidEmail(text) == true){
                    setErrorEmail("")
                  }else{
                    setErrorEmail("Email khong dung dinh dang")
                  }
                }}/>
                <View style={{
                    height: 1, width: "100%", borderColor: "#d2691e",
                    borderWidth: 1
                }}></View>
                <Text style={{color:"red"}}>{errorEmail}</Text>
                
                <Text style={{ color: "#d2691e" }}>Password:</Text>
                <TextInput 
                  onChangeText={(text)=>{
                    if(isValidPassword(text) == true){
                      setErrorPassword("")
                      setPassword(text)
                    }else{
                      setErrorPassword("Password khong dung dinh dang")
                    }
                  }}
                placeholder="Enter your password" />
                <View style={{
                    height: 1, width: "100%", borderColor: "#d2691e",
                    borderWidth: 1
                }}></View>
                <Text style={{color:"red"}}>{errorPassword}</Text>
                <Text style={{ color: "#d2691e" }}>Retype Password:</Text>
                <TextInput 
                  onChangeText={(text)=>{
                    if(isValidREpassword(text, password) == true){
                      setErrorRePassword("")
                    }else{
                      setErrorRePassword("Password khong dung dinh dang")
                    }
                  }}
                placeholder="Re-Enter your password" />
                <View style={{
                    height: 1, width: "100%", borderColor: "#d2691e",
                    borderWidth: 1
                }}></View>
                <Text style={{color:"red"}}>{errorRePassword}</Text>
                <TouchableOpacity style={{
                    width: "50%", backgroundColor: "#d2691e", alignItems: "center",
                    alignSelf: "center", marginTop: 30, borderRadius: 20
                }}>
                    <Text style={{ padding: 10, color: "white", fontWeight: "bold" }}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 20, alignItems: "center", justifyContent: "center"
            }}>
                <View style={{ flexDirection: "row",
                alignItems: "center", justifyContent: "center"}}>
                    <View style={{ height: 1, width: 80, backgroundColor: "white" }}></View>
                    <Text style={{ marginHorizontal: 10 , color:"white"}}>Use other methods</Text>
                    <View style={{ height: 1, width: 80, backgroundColor: "white" }}></View>
                </View>
                <View style={{flexDirection:"row" , alignItems:"center", justifyContent:"center",
            marginTop:10}}>
                    <Image style={{ width: 35, height: 35, marginRight:15 , tintColor:"white"}} source={icon.facebook} />
                    <Image style={{ width: 35, height: 35 , tintColor:"white"}} source={icon.google} />
                </View>
            </View>
        </View>
    )
}