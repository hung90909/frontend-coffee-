import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import List from './List';
import { icon } from "../../conten"
import { TextInput } from 'react-native-gesture-handler';
export default function ListCoffee({ navigation }) {

    const [search, setSearch] = React.useState("");
    const [coffeeList, setCoffeeList] = React.useState([{
        name: 'COFFEE',
        url: 'https://perfectdailygrind.com/wp-content/uploads/2019/09/Low-Waste-2.png',
        type: "Soda",
        status: "OPENING SOON",
        price: "200",
        website: "https://perfectdailygrind.com",
        netWork: [
            {
                facebook: "https://www.facebook.com",
                instagram: "https://www.instagram.com",
                twitter: "https://twitter.com",
            }
        ]

    },
    {
        name: 'ROBUSTA',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9APTkneNiV2YpbL77DAqP218KGOPErorlTA&usqp=CAU',
        type: "Soda",
        price: "100",
        status: "OPENING NOW",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    {
        name: ' ARABICA',
        url: 'https://post.healthline.com/wp-content/uploads/2021/06/Mariha-kitchen_GettyImages-1062468052-1296x864.jpg',
        type: "Soda",
        price: "100",
        status: "CLOSING SOON",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    {
        name: 'CHERRY',
        url: 'https://i.insider.com/5eaad519204ad35ad7775075?width=751&format=jpeg',
        type: "Soda",
        price: "100",
        status: "CLOSING SOON",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    {
        name: 'CÀ PHÊ CULI',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_qR7ZNGdlfBHD48Xg3QfhujXSOHfSVsNyw&usqp=CAU',
        type: "Soda",
        price: "100",
        status: "CLOSING SOON",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    {
        name: 'CÀ PHÊ MOKA',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH9Wd691CBSpozAeqVgkIc1zA4I9yNMKExg&usqp=CAU',
        type: "Soda",
        price: "100",
        status: "OPENING SOON",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    {
        name: 'TRUNG NGUYÊN',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD71eLf-f4lHBadEYZC-kXF54_LU_ZhItaRQ&usqp=CAU',
        type: "Soda",
        price: "100",
        status: "OPENING NOW",
        website: "https://perfectdailygrind.com",
        netWork: [{
            instagram: "https://www.instagram.com",
            twitter: "https://twitter.com",
        }]

    },
    ]);
    const [listMenu, setListMenu] = React.useState([
        {
            name: "BBG",
            url: "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg",
        },
        {
            name: "Breakfast",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg",
        },
        {
            name: "Coffee",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS4JX_BBWWXI61hfVCK4bHzwa9hx7vOnckQ&usqp=CAU",
        },
        {
            name: "Noodles",
            url: "https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg",
        },
        {
            name: "Hot Dogs",

            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdr6qEoF3pWcGM33x5jOLTEt1VWTj_Vb_voA&usqp=CAU",
        },
        {
            name: "Dinner",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKDZ2Jf_CLwzzIZM6JIabGH_55PT8kTQjRA&usqp=CAU",
        },
        {
            name: "Soda",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7ek3rHcCNtRNE7uVyKUE-_EwiDWenrOTqQ&usqp=CAU",
        },

    ]);

    const isSearch = () => coffeeList.filter(eachFoof => eachFoof.name.toLowerCase()
        .includes(search.toLowerCase()))

    return (
        <View>
            <View style={{ width: "100%", height: 60, flexDirection: "row" }}>
                <Image style={{
                    width: 20, height: 20,
                    position: "absolute",
                    top: 27,
                    left: 10,
                }} source={icon.search} />
                <TextInput
                    placeholder='Search coffee ?'
                    placeholderTextColor={"#f5f5f5"}
                    onChangeText={(text) => {
                        setSearch(text)
                    }}
                    style={{
                        backgroundColor: "gray", flex: 1, height: 35,
                        marginVertical: 10, marginRight: 10, marginTop: 20, marginLeft: 40, borderRadius: 6,
                        padding: 10, color: "white"
                    }} />
                <Image style={{
                    width: 30, height: 30, marginTop: 22, marginRight: 10
                }} source={icon.menu} />
            </View>
            <View style={{ height: 1, width: "100%", backgroundColor: "black" }}></View>
            <FlatList style={{
                width: "100%", height: 110,
            }}
                horizontal={true}
                data={listMenu}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Product")
                            }}
                            style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image style={{
                                width: 50, height: 50, resizeMode: "cover",
                                borderRadius: 25, marginTop: 10, marginHorizontal: 10, marginBottom: 5
                            }}
                                source={{ uri: item.url }} />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
            <View style={{ height: 1, width: "100%", backgroundColor: "black" }}></View>

            {isSearch().length > 0 ? <FlatList data={isSearch()}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    return (
                        <List
                            onPress={() => {
                                alert("click " + item.name)
                            }}
                            coffee={item}
                        />
                    )
                }} />
                :
                <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <Text style={{ color: "black", fontSize: 20 }}>Không tìm thấy kết quả </Text>
                </View>}
        </View>
    )

}
