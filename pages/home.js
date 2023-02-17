import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import db from '../config';
import firebase from 'firebase';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contatos: [],
    };
  }
  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.linha}
          onPress={() => {
            this.props.navigation.navigate('chat', {
              story: this.state.contatos[index].key,
            });
          }}>
          <Image
            source={require('../assets/profile_img.png')}
            style={styles.pf}
          />
          <Text>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  fetchTheme = () => {
    firebase
      .database()
      .ref('/contatos/')
      .on(
        'value',
        (snapshot) => {
          let theme = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              theme.push({ key: key, value: snapshot.val()[key] });
            });
          }
          this.setState({ contatos: theme });

          // this.props.setUpdateToFalse();
        },
        function (errorObject) {
          console.log('A leitura falhou: ' + errorObject.code);
        }
      );
  };

  componentDidMount() {
    this.fetchTheme();
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
            centerComponent={{ text: 'chat da manu', style: styles.heading }}
          />

          <FlatList
            data={this.state.contatos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />
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
  pf: {
    width: 100,
    height: 100,
    borderRadius: 100,
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
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
