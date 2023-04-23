import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { icon } from "../../conten"

export default function Chats({navigation}) {
    // const navigation = props.navigation;

    const [users, setUsers] = React.useState([
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "How are you ?",
            numberMessage: 0,
        },
        {
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "How are you ?",
            numberMessage: 3,
        },
        {
            id: 3,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "How are you ?",
            numberMessage: 0,
        },
        {
            id: 4,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "How are you ?",
            numberMessage: 0,
        },
        {
            id: 5,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 0,
        },
        {
            id: 6,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 11,
        },
        {
            id: 7,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 11,
        },
        {
            id: 8,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 11,
        },
        {
            id: 9,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 11,
        },
        {
            id: 10,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft9j1N5RomI96p0vldhtRrYqpXbyGuvBWQw&usqp=CAU",
            name: "Jhon Doe",
            messages: "Hello , How are you ?",
            numberMessage: 11,
        },
    ]);

    return (
        <View>
            <View style={{
                flexDirection: "row", height: 60, width: "100%",
                backgroundColor: "#d2691e", justifyContent: "space-between", alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => {
                        alert("you click back")
                    }}>
                    <Image style={{ width: 20, height: 20, marginLeft: 10, tintColor: "white" }} source={icon.back} />
                </TouchableOpacity>

                <Text style={{ color: "white", fontSize: 20 }}>Notifications</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert("you click search")
                    }}>
                    <Image style={{ width: 20, height: 20, marginRight: 10, tintColor: "white" }} source={icon.search} />
                </TouchableOpacity>

            </View>
            <View style={{
                flexDirection: "row", justifyContent: "space-between", width: "100%", height: 40,
                alignItems: "center"
            }}>
                <Text style={{ marginLeft: 10 }}>6 unread messages</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert("you click search")
                    }}>
                    <Image style={{ width: 20, height: 20, marginRight: 10, tintColor: "black" }} source={icon.search} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate("Messages",{item})
                        }}>
                        <View style={{ padding: 15, flexDirection: "row" }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }}
                                source={{ uri: item.url }} />
                            <View>

                               {item.numberMessage > 0 ? <View style={{
                                    backgroundColor: "red", borderRadius: 9,
                                    position: "absolute", right: item.numberMessage > 9 ? -4 : -8, alignItems: "center"
                                }}>
                                    <Text style={{ paddingHorizontal:item.numberMessage > 9 ? 1 :5, color: "white", fontSize: 12 }}>{item.numberMessage}</Text>
                                </View>: null }
                            </View>
                            <View style={{ marginStart: 15 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
                                <Text style={{ color: "gray" }}>{item.messages}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

