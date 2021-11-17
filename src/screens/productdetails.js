import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, ScrollViewComponent } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const productDetails = () => {

    const navigation = useNavigation()
    return (
<ScrollView>
    <View>
        <Text style={fontwieght='bold'}> Bags</Text>
       <Image source={require('../assets/bag.jpg')}/>    
    <Text>It's price is GHC 50</Text>
    </View>
        <View>
<Text>Cups
</Text>
<Image source={require('../assets/cups.jpg')}/>  
<Text>Price GHC 35</Text>
    </View>
    <View>
        <Text style={fontwieght='bold'}>Shoes</Text>
        <Image source={require('../assets/shoe.jpg')}/>  
        <Text>Price GHC 234</Text>
    </View>
    <View>
        <Text>Shirts</Text>
        <Image source={require('../assets/shirt.jpg')}/> 
        <Text>Price GHC 85</Text> 
        </View>
        <View>
            <Text> Tops</Text>
            <Image source={require('../assets/tops4.jpg')}/>
            <Text> Price GHC 75</Text>

        </View>
</ScrollView>
    )}

    export default productDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#6495ed",
        justifyContent: "center",
        alignItems: 'center',
    },})
