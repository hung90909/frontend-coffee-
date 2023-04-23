import { Text, TouchableOpacity, Image } from "react-native";
import { icon } from "../conten"
import Reflect, { Component } from "react";
export default function UIButton(props) {
    const { onPress, isSeclected, Title } = props;

    return (
        <TouchableOpacity onPress={onPress}
            style={{
                borderWidth: 1, height: 40, marginHorizontal: 20,
                backgroundColor: isSeclected == true ? "white" : null,
                borderColor:"white",
                borderRadius: 7, marginVertical: 10,
                alignItems: "center", justifyContent: "center"
            }}>
            <Text style={{ color:isSeclected == true ? "red" : "white", }}>{Title}</Text>
            {
                isSeclected == true &&
                <Image style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: 10,
                    left: 10,
                }} source={icon.check} />
            }

        </TouchableOpacity>
    );
}