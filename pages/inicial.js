import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Inicial extends Component {
    
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Image source={require("../assets/chatmanu.jpg")} style={styles.logo}/> 
               <TouchableOpacity onPress={ ()=>{this.props.navigation.navigate("home")}  }>
                <Text style={styles.nome}>CHAT DA MANU</Text>
               </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },
  nome:{
    fontWeight:"bold",
    color:"black"
  },
  logo:{ 
    width:200,
    height:200
  }
});