import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {icon} from "../../conten"

export default function List(props) {
    const {name , url , type , website , netWork, price , status} = props.coffee;
    const corlorStatus = (text) =>{
        if(text.trim() == "CLOSING SOON"){
            return "red";
        }else if(text.trim() == "OPENING SOON"){
            return "#daa520"
        }else if(text.trim() == "OPENING NOW"){
            return "green";
        }else{
            return "gray";
        }

    }
    const {onPress} = props;
    return (
        <TouchableOpacity
         onPress={onPress}
         style={{ flexDirection: "row", height: 150, marginTop:10 , }}>
            <Image
                style={{
                    width: 100, height: 100, resizeMode: "cover", margin: 10,
                    borderRadius: 15
                }}
                source={{
                    uri: url,
                }} />
            <View style={{ flex: 1 , margin:10}}>
              <Text style={{fontSize:15, fontWeight:"bold"}}>{name}</Text>
             <View style={{height:1 , width:"100%", backgroundColor:"black"}}></View>
             <View style={{flexDirection:"row"}}>
                <Text style={{color:"gray"}}>
                    Status:
                </Text>
                <Text style={{color: corlorStatus(status)}}>{status} </Text>
             </View>
             <Text style={{color:"gray"}}>Pice: {price} $</Text>
             <Text style={{color:"gray"}}>Drink Type: Coffee</Text>
             <Text style={{color:"gray"}}>Website: {website}</Text>
             <View style={{flexDirection:"row" }}>
                 {netWork['facebook'] == undefined && <Image style={{width:20 ,marginRight:8, height:20, tintColor:"gray"}} source={icon.facebook}/>}
                 {netWork['instagram'] == undefined&& <Image style={{width:20 ,marginRight:8, height:20, tintColor:"gray"}} source={icon.instagram}/>}
                 {netWork['twitter'] == undefined && <Image style={{width:20 ,marginRight:8, height:20, tintColor:"gray"}} source={icon.twitter}/>}
                
             </View>
            </View>

        </TouchableOpacity>
    )


}
