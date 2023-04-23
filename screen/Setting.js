import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity , Switch, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { icon } from "../conten"

export default function Setting() {
    
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [isPassword, setisPassword] = React.useState(false);
    const [isFinger, setisFinger] = React.useState(false);
    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{
                backgroundColor: "#d2691e",
                width: "100%",
                height: 60,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white"
                }}>Settings</Text>
            </View>
            <View style={{
                width: "100%",
                height: 30,
                backgroundColor: "gray",
                opacity: 0.6,
            }}>
                <Text style={{
                    padding: 5,
                    marginLeft: 5,
                    color: "#ff4500",
                }}>Common</Text>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, alignItems: "center" }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.world} />
                <Text>Langage</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ color: "gray" }}>English</Text>
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, alignItems: "center" }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.cloud} />
                <Text>Environment</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ color: "gray" }}>Production</Text>
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
            <View style={{
                width: "100%",
                height: 30,
                backgroundColor: "gray",
                opacity: 0.6,
            }}>
                <Text style={{
                    padding: 5,
                    marginLeft: 5,
                    color: "#ff4500",
                }}>Account</Text>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, alignItems: "center" }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.phone} />
                <Text>Phone number</Text>
                <View style={{ flex: 1 }} />
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, 
            alignItems: "center",  }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.email} />
                <Text>Email</Text>
                <View style={{ flex: 1 }} />
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, 
            alignItems: "center" ,}}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.out} />
                <Text>Sign out</Text>
                <View style={{ flex: 1 }} />
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>

            <View style={{
                width: "100%",
                height: 30,
                backgroundColor: "gray",
                opacity: 0.6,
            }}>
                <Text style={{
                    padding: 5,
                    marginLeft: 5,
                    color: "#ff4500",
                }}>Security</Text>
            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 10, 
            alignItems: "center", }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.not} />
                <Text>Lock app in background</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: 'gray', true: '#d2691e' }}
                    thumbColor={isEnabled ? 'white' : 'gray'}
                    opacity={isEnabled ? null : 0.5}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setIsEnabled(!isEnabled);
                    }}
                    value={isEnabled} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10,
            alignItems: "center", }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.fingerprint} />
                <Text>Use fingerprint</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: 'gray', true: '#d2691e' }}
                    thumbColor={isFinger ? 'white' : 'gray'}
                    opacity={isFinger ? null : 0.5}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setisFinger(!isFinger);
                    }}
                    value={isFinger} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10,
            alignItems: "center", }}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.lock} />
                <Text>Chage Password</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: 'gray', true: '#d2691e' }}
                    thumbColor={isPassword ? 'white' : 'gray'}
                    opacity={isPassword ? null : 0.5}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setisPassword(!isPassword);
                    }}
                    value={isPassword} />
            </View>

            <View style={{
                width: "100%",
                height: 30,
                backgroundColor: "gray",
                opacity: 0.6,
            }}>
                <Text style={{
                    padding: 5,
                    marginLeft: 5,
                    color: "#ff4500",
                }}>Misc</Text>
            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, 
            alignItems: "center" ,}}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.service} />
                <Text>Tern of Service</Text>
                <View style={{ flex: 1 }} />
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10, 
            alignItems: "center" ,}}>
                <Image style={{
                    height: 23,
                    width: 23,
                    marginRight: 6
                }} source={icon.open} />
                <Text>Open source licenses</Text>
                <View style={{ flex: 1 }} />
                <Image style={{
                    height: 23,
                    width: 23,
                    tintColor: "gray"
                }}
                    source={icon.next} />
            </View>
        </SafeAreaView>
    )

}