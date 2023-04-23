import { Text, TouchableOpacity, Image } from "react-native";
import { TextInput, View, } from "react-native";
import React, { useState } from "react";
import { icon, image } from "../conten"
import { isValidEmail, isValidPassword } from "../check/Validate"
export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const isValidOK = () => {
        if (isValidEmail(email) == true && isValidPassword(password) == true) {
            return true;
        } else {
            return false;

        }
    }
    return (
        <View style={{ flex: 100, marginHorizontal: 20 }}>
            <View style={{
                flex: 25
                , flexDirection: "row", alignItems: "center"
            }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>Already have an account?</Text>
                <Image style={{ width: 100, height: 150, flex: 1, }} source={image.logo} />
            </View>

            <View style={{
                flex: 35, justifyContent: "center", alignItems: "flex-start",
            }}>
                <Text style={{ color: "#d2691e" }}>Email:</Text>
                <TextInput onChangeText={(text) => {
                    if (isValidEmail(text) == true) {
                        setErrorEmail("");



                    } else {
                        setErrorEmail("Email khong dung dinh dang");

                    }
                    setEmail(text);

                }}
                    placeholder="vanhungcoffee@gmail.com" />
                <View style={{
                    height: 0.1, width: "100%", borderWidth: 1,
                    borderColor: "#d2691e"
                }}></View>
                <Text style={{ color: "red" }}>{errorEmail}</Text>
                <Text style={{ color: "#d2691e", marginTop: 20 }}>Password:</Text>
                <TextInput onChangeText={(text) => {
                    if (isValidPassword(text) == true) {
                        setErrorPassword("");
                    } else {
                        setErrorPassword("Password khong dung dinh dang");

                    }
                    setPassword(text);
                }}
                    secureTextEntry={true} placeholder="Enter your password" />
                <View style={{
                    height: 0.1, width: "100%", borderWidth: 1,
                    borderColor: "#d2691e"
                }}></View>
                <Text style={{ color: "red" }}>{errorPassword}</Text>
            </View>

            <View style={{ flex: 20 }}>
                <TouchableOpacity
                    disabled={isValidOK() == false ? true : false}
                    onPress={() => {
                        if (isValidEmail(email) == true && isValidPassword(password) == true) {
                            navigation.navigate("ListCoffee");

                            alert("email:" + email + "pass:" + password);
                        } else {

                        }
                    }}
                    style={{
                        backgroundColor: isValidOK() == true ? "#d2691e" : "gray",
                        width: "50%",
                        alignSelf: "center",
                        alignItems: "center",
                        borderRadius: 20

                    }}>
                    <Text style={{
                        padding: 10,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                    style={{
                        alignSelf: "center",
                        marginVertical: 10,

                    }}>
                    <Text style={{
                        color: "#d2691e"
                    }}>New user? Register now</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 20, }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <View style={{
                        height: 1, width: 80,
                        borderWidth: 1
                    }}>
                    </View>
                    <Text style={{
                        marginHorizontal: 10,
                    }}>Use other methods</Text>
                    <View style={{
                        height: 1, width: 80,
                        borderWidth: 1
                    }}>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "center",
                    padding: 10
                }}>
                    <Image style={{ width: 35, height: 35, marginRight: 15, tintColor: "black" }} source={icon.facebook} />
                    <Image style={{ width: 35, height: 35, tintColor: "black" }} source={icon.google} />
                </View>

            </View>
        </View>
    )


}