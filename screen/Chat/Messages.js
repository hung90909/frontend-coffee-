import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { icon } from "../../conten"
import { useRoute } from '@react-navigation/native';
export default function Messages(props) {
    const route = useRoute();
    const navigation = props.navigation
    const { item } = route.params;
    const [messages, setMessages] = React.useState([
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp2ODxCnly0wsuGxIMzAuDtDDkhCcIHegRA&usqp=CAU",
            chat: "Hi , how are you today?",
            showUrl:true,
            isSenter: false,
            time: 1676594618000,
        },
        {
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8R5VmgqDqpRCwQfw2Y9V-DM-iXS59R9hQ&usqp=CAU",
            chat: "I am fine , thank you",
            isSenter: true,
            showUrl:true,
            time: 1676594678000,
        },
        {
            id: 3,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8R5VmgqDqpRCwQfw2Y9V-DM-iXS59R9hQ&usqp=CAU",
            chat: "And you ?",
            isSenter: true,
            showUrl:false,
            time: 1676594798000,
        },
        {
            id: 4,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8R5VmgqDqpRCwQfw2Y9V-DM-iXS59R9hQ&usqp=CAU",
            chat: "Are you free time ?,dsdcsdcsdcdscsdcacsaacafefewfe",
            isSenter: true,
            showUrl:false,
            time: 1676595038000,
        },
        {
            id: 5,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEp2ODxCnly0wsuGxIMzAuDtDDkhCcIHegRA&usqp=CAU",
            chat: "I am very busy! ,on Monday , fraiday , I have many leesn at the shool ",
            isSenter: false,
            showUrl:true,
            time: 1676595158000,
        },
    ]);

    return (
        <View>
            <View style={{
                flexDirection: "row", height: 60, width: "100%", backgroundColor: "#d2691e",
                justifyContent: "space-between", alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image style={{ width: 20, height: 20, marginLeft: 10, tintColor: "white" }} source={icon.back} />
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 20 }}>{item.name}</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert("you click menu")
                    }}>
                    <Image style={{ width: 20, height: 20, marginRight: 10, tintColor: "white" }} source={icon.menu} />
                </TouchableOpacity>
            </View>
            <FlatList
            style={{marginTop:20}}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        
                        <View style={{  marginHorizontal: 10, padding:5}}>
                            
                            {item.isSenter == false ? (<View style={{ flexDirection: "row", }}>
                               {item.showUrl == true ?
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: item.url }} />:
                                <View style={{width: 50, height: 50, borderRadius: 25}}/>}
                                <View style={{
                                    alignItems: "center", justifyContent: "center",
                                    marginLeft: 15 , width:"50%"
                                }}>
                                    <Text style={{
                                        backgroundColor: "gray", padding: 6,
                                        borderRadius: 10 ,  color: "white"
                                    }}>{item.chat}</Text>
                                </View>

                            </View>) : 
                            <View style={{
                                flexDirection: "row", justifyContent: "flex-end",
                              
                            }}>
                                <View style={{
                                  
                                    alignItems: "flex-end", justifyContent: "center",
                                    marginRight: 15 , width:"50%"
                                    
                                }}>
                                    <Text style={{
                                        backgroundColor: "gray", padding: 6,
                                        borderRadius: 10 , color: "white"
                                    }}>{item.chat}</Text>
                                </View>
                                {item.showUrl == true ?
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: item.url }} />:
                                <View style={{width: 50, height: 50, borderRadius: 25}}/>}

                            </View>}

                        </View>
                    )
                }} />

        </View>
    )
}