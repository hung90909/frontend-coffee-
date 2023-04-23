import { Text, View, StyleSheet, ImageBackground, Image,
      TouchableOpacity } from "react-native";
import {icon, image} from "../conten"
import { useState } from "react";
import {UIButton} from "../compoment/index"
export default function Welcom({navigation}) {
    const[accountType , setAccountType] = useState([
        {
            name : "Influenncer",
            isSeclected:true,
        },
        {
            name : "Business",
            isSeclected:false,
        },
        {
            name : "Individual",
            isSeclected:false,
        },
    ])

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ImageBackground source={image.backgroubd}
            resizeMode="cover"
            style={{flex:100}}>
                <View style={{ flex: 10 ,
            flexDirection:"row", justifyContent:"flex-start", 
            alignItems:"center" }}>
                   <Image style={{width:30 , height:30
                , marginHorizontal:10}} source={icon.fire}/>
                   <Text style={{color:"white", fontWeight:"bold"}}>Van Hung. Coffee</Text>
                   <View style={{flex:1}}></View>
                   <Image style={{width:20 , height:20, marginRight:10,
                tintColor:"white"}} source={icon.question}/>
                </View>

                <View style={{  flex: 30 , justifyContent:"center",
            alignItems:"center"}}>
                    <Text style={{color:"white"}}>Welcom To</Text>
                    <Text style={{color:"white" , fontWeight:"bold", fontSize:17}}>Van Hung.Coffee</Text>
                    <Text style={{color:"white"}}>please select your account type </Text>
                </View>

                <View style={{ flex: 50 }}>
               
                  {accountType.map(accountTypes => <UIButton 
                  onPress={() =>{
                    let newAcountType = accountType.map(reAcountType =>{
                        if (reAcountType.name == accountTypes.name){
                            return {...reAcountType, isSeclected:true}
                        }else{
                            return {...reAcountType, isSeclected:false}
                        }

                    });
                    setAccountType(newAcountType)

                  }}
                  Title={accountTypes.name}
                  isSeclected = {accountTypes.isSeclected}
                  />)} 
            
                </View>

                <View style={{ flex: 30, }}>
                    <UIButton onPress={() => {
                      navigation.navigate("Login");
                    }}
                    Title={"Login".toUpperCase()} />
                    <Text style={{textAlign:"center", color:"white"}}>Want to register new Acount ?</Text>
                    <Text style={{textAlign:"center", marginTop:10, color:"red"
                , textDecorationLine: 'underline'}}>Register</Text>
                </View>
            </ImageBackground>
        </View>
    );

};