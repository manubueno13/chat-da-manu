import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import db from '../config';
import firebase from 'firebase';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.route.params.story,
      conversa:"",
      mensagem:"",
    };
  }
enviar= ()=>{
   var key = this.state.nome;
var envie=db.ref('/contatos/' + key + '/').update({
conversa:this.state.conversa + this.state.mensagem

})

}
   fetchTheme = () => {
    var key = this.state.nome;
    var teamsref = db.ref('/contatos/' + key + '/');
    teamsref.on('value', (data) => {
      var teamDetails = data.val();
      this.setState({
        conversa: teamDetails.conversa,
      });
    });
  };

  componentDidMount() {
    this.fetchTheme();
  }

  componentDidUpdate() {
   // console.log(this.state.conversa);
  }

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
                  <Icon name="arrow-back" color="white" />
                </TouchableOpacity>
              </View>
            }
            centerComponent={{ text: this.state.nome, style: styles.heading }}
          />
         <View  style={{flex:"90%"}} > 
          <View  style={styles.chat} > 
              <Text> {this.state.conversa}  </Text>
          </View>
           </View>

          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput style={styles.input} onChangeText={(texto)=>{this.setState({mensagem:"  "+"manu"+": "+ texto})}}/>
            <TouchableOpacity onPress={()=>{this.enviar()}}>
              <Icon name="send" color="black" />
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  nome: {
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
  },
  linha: {
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F5',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'gray',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    borderRadius:50
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
   chat: {
    backgroundColor: '#FFF0F5',
    width: '100%',
    borderRadius: 200,
  },
});
