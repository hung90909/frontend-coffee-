import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { icon } from "../../conten"
import { TextInput } from 'react-native-gesture-handler';
import GridView from './GridView';

export default function () {
    const [products, setProducts] = React.useState([
        {
           name: "Whole Bean Coffee",
           url:"https://m.media-amazon.com/images/I/81uwd-MUOnL._AC_UL480_FMwebp_QL65_.jpg",
           price:"209",
           isChecked:false,
           star:3,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "Chock Full o' Nuts",
           url:"https://m.media-amazon.com/images/I/71Exymogs9L._SY879_.jpg",
           price:"39",
           isChecked:false,
           star:5,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "Nescafé",
           url:"https://m.media-amazon.com/images/I/81uwd-MUOnL._AC_UL480_FMwebp_QL65_.jpg",
           price:"291",
           isChecked:false,
           star:2,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "Yuban",
           url:"https://m.media-amazon.com/images/I/615mCGJKjXL._AC_UL480_FMwebp_QL65_.jpg",
           price:"100",
           isChecked:false,
           star:1,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "Maxwell House",
           url:"https://m.media-amazon.com/images/I/615mCGJKjXL._AC_UL480_FMwebp_QL65_.jpg",
           price:"300",
           isChecked:false,
           star:1,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "Kirkland's",
           url:"https://m.media-amazon.com/images/I/615mCGJKjXL._AC_UL480_FMwebp_QL65_.jpg",
           price:"300",
           isChecked:false,
           star:8,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
        {
           name: "McCafé",
           url:"https://m.media-amazon.com/images/I/814TWJSuH3L._AC_UL480_FMwebp_QL65_.jpg",
           price:"20",
           isChecked:false,
           star:2,
           reviews:290,
           description:[
            
                "Được mix từ robusta Đắc Lắc và Arabica Lâm Đồng",
                "Không có bất kỳ phụ gia nào khác.",
                "Khi cafe xay nguyên chất mở nắp túi thơm mùi hương rất ngọt và không bị ngái.",
           ]
        },
    ]);

    return(
        <View>
            <FlatList 
            data={products}
            keyExtractor={(item)=> item.name}
            numColumns={2}
            renderItem={({item, index})=>{
             return(
                <GridView 
                onPress={()=>{
                    let click = products.map((items)=>{
                        if(items.name == item.name){
                            return {...items, isChecked: items.isChecked == false? true : false};
                        }
                        return items

                    })
                    setProducts(click)

                }}
                item={item} index={index} />
             )
            }}/>
            
        </View>
    )
}