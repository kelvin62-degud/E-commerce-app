import React from 'react';
import {Text, View, TouchableOpacity,TextInput} from 'react-native';

export default function App() {
  return(
    
    <View style={{width:"70%",height:"70%",
    justifyContent:"center",alignSelf:"center",alignItems:"center"}}>
      <Text  style={{textAlign:'right',margin:"10%",fontWeight:"bold"}}> Welcome To ChatUp</Text>
      <TextInput placeholder={'Enter User Name'} style={{height:45,width:"70%",borderBottomWidth:2}}/>
      <TextInput placeholder={'Enter Password'} style={{height:45,width:"70%", borderBottomWidth:2,marginTop:"5%"}}/>
      
      <View style={{marginTop:"7%", width:"70%"}}>
      <TouchableOpacity style={{borderWidth:1,height:42,width:"70%",justifyContent:"center",
    borderRadius:40, backgroundColor:"#7fffd4", alignSelf:"center", textAlign:"center", marginTop:"5%" }}>
 <Text style={{color:"white"}}> Continue</Text>
      </TouchableOpacity>
      </View>
    </View>

   )
  }
