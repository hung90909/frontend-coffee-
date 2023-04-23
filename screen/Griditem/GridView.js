import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { icon } from "../../conten"
import { TextInput } from 'react-native-gesture-handler';
import FiveStar from './FiveStar';

export default function GridView(props) {
    const { index, item , onPress } = props;
    // const {url , name , price , isChecked , star , reviews , description} = props.item;
    return (
        <View style={{alignSelf:"center", justifyContent:"center"}}>
        <View style={{
            width: 160,
            margin: 10,
            borderRadius: 14,
            borderWidth: 1,
        }}>
            <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
                <Image
                    resizeMode='cover'
                    style={{
                        width: 80, height: 100, marginVertical: 5,
                        borderRadius: 15
                    }}
                    source={{
                        uri: item.url,
                    }} />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginLeft: 20
                }}>${item.price}</Text>
            </View>
            <Text style={{
                marginLeft: 5,
                fontWeight: "bold",
                color: "red",
            }}>{item.name}</Text>
            {item.description.map(descriptions => {
                return (
                    <Text style={{
                        marginHorizontal: 5,
                        fontSize: 10
                    }}>- {descriptions}</Text>
                )
            })}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <TouchableOpacity 
               onPress={onPress}
                style={{
                    flexDirection: "row",
                    width: "50%"
                }}>
                    <Image
                        style={{
                            width: 20, height: 20, marginLeft: 5,
                            tintColor:item.isChecked == true? "red" : "gray",
                            marginTop: 5
                        }}
                        source={icon.heart} />
                    <Text style={{
                        color: item.isChecked == true? "red" : "gray",
                        fontSize: 12, width: 80, marginLeft: 5
                    }}>Saved for leader</Text>
                </TouchableOpacity>

                <View style={{
                     marginLeft: 15,
                    flex: 1, 
                }}>
                    <View style={{flexDirection: "row",}}>
                    <FiveStar numberStar={item.star} />
                    </View>
                    <Text style={{
                        marginBottom: 10,
                        fontSize: 10,
                        marginTop:5
                    }}>{item.reviews} review</Text>
                </View>
            </View>
        </View>
        </View>
    )

}