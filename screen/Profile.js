import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button, StyleSheet,
    Text, TouchableOpacity, View, FlatList, Image, TextInput, Modal, ActivityIndicator
} from 'react-native';

export default function Products() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(data => setList(data))s
    //         .catch((errors) => {
    //             throw errors

    //         }).finally(() => setIsLoading(false));

    // }, []);



    return (
        <View style={{marginTop:30}}
        >
            <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center",
        color:"#d2691e"}}>Users Profile</Text>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>User name: {item.username}</Text>
                            <Text>Email:{item.email} </Text>
                            <Text>Address:{item.address.street}</Text>
                            <Text>City:{item.address.city}</Text>
                            <Text>Phone: {item.phone}</Text>
                            <Text>Company: {item.company.name}</Text>
                            <Text>Zipcode: {item.address.zipcode}</Text>
                        </View>
                    }
                    keyExtractor={(item) => item.id}
                />}

        </View>


    );
}