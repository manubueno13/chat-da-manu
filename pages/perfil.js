import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

export default class Perfil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.bg}>
           <HeaderRNE
            backgroundColor={'pink'}
            leftComponent={
              <View style={styles.headerRight}>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    this.props.navigation.navigate('home');
                  }}>
                  <Icon name="menu" color="white" />
                </TouchableOpacity>
              </View>
            }
            rightComponent={
              <View style={styles.headerRight}>
                <TouchableOpacity style={{ marginLeft: 10 }}  onPress={() => {
                    this.props.navigation.navigate('Perfil');
                  }}>
                  <Icon name="person-outline" color="white" />
                </TouchableOpacity>
              </View>
            }
            centerComponent={{ text: 'Perfil', style: styles.heading }}
          />
<View style={styles.container2}>
<Image source={require("../assets/profile_img.png")} style={styles.pf}/>
<Text style={styles.nomep}>
MANU

</Text>
</View>

<View style={styles.container2}>
<Text style={styles.nomep}>
telefone: +55 19 99655411

</Text>
<Text style={styles.nomep}>
recado: on-line

</Text>

<Text style={styles.nomep}>
cidade: campinas- sp

</Text>
</View>

          

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
   container2: {
    flex: 0.35,
    resizeMode: 'cover',
    alignItems:"center",
    justifyContent:"center"
  },
  pf: {
    width: 100,
    height: 100,
    borderRadius: 100,
    
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  nome: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginLeft: 20,
  },
  pfimg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  novocontato: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginBottom: 0,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
   nomep: {
    color: '#FF1493',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  contatobutton: {
    flexDirection: 'row',
    backgroundColor: '#FFF0F5',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
});
