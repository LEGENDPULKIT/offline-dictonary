import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './database';
import logo from './dic.png';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      word: '',
      isButtonpressed: 'false',
      defination: '',
      lexicalCatorgry: '',
    };
  }
  getWord =(word) => {
   
    var t=word.toLowerCase()
    try{
        var words=db[t]["word"]
        var lc=db[t]["lexicalCategory"]
        var defination=db[t]["definition"]
        this.setState({
          word:words,
          lexicalCatorgry:lc,
          defination:defination
        })

    }
    catch(err)
    {
      alert("Sorry this word is not available for now!")
      this.setState({
        word:'',
        isButtonpressed:false
      })
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: 'pink' }}>
        <Header
          backgroundColor={'lightgreen'}
          leftComponent={{ icon:'menu',color:"black"
          }}
          centerComponent={{
            text: 'POCKET DICTONARY',
            style: { color: 'red', fontSize: 18 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isButtonpressed: 'true' });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>

        <View style={styles.detailConainer}>
          <Text style={styles.detailsTitle}>Word:</Text>
           <Text style={{fontSize:16,fontWeight:'bold'}}>{this.state.word}</Text>
        </View>

        <View style={styles.detailConainer}>
          <Text style={styles.detailsTitle}>
            Type:
          </Text>
          <Text style={{fontSize:16,fontWeight:'bold'}}>{this.state.lexicalCatorgry}</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={styles.detailsTitle}>
            definition:
          </Text>
          <Text style={{fontSize:16,fontWeight:'bold'}}>{this.state.defination}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    height: 40,
    borderWidth: 4,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 50,
    outline: 'none',
    backgroundColor: 'yellow',
  },
  searchButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    paddin: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  detailsTitle: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageIcon:
  {
    
  }
});
