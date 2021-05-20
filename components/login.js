import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert,ActivityIndicator} from 'react-native';
import OutlineInput from 'react-native-outline-input';
import firebase from '../android/app/src/Database/firebase'


export default class Login extends Component {
  
    constructor() {
      super();
      this.state = { 
        email: '', 
        password: '',
        isLoading: false
      }
    }
  
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    userLogin = () => {
      if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to signin!')
      } else {
        this.setState({
          isLoading: true,
        })
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '', 
            password: ''
          })
          this.props.navigation.navigate('Home')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }
    }
  
  
  render(){
    if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
  return (
    <View style={styles.container}>
         <ImageBackground source={require('../android/app/src/main/images/bgg.jpeg')} style={styles.image}>
        
            <View style={{marginTop:90}}></View>
            
    <SafeAreaView style={{margin:15 }}>

      <OutlineInput
      
        label="email"
        value={this.state.email}
        onChangeText={(val) => this.updateInputVal(val, 'email')}
        activeValueColor="#6c63fe"
        activeBorderColor="#6c63fe"
        activeLabelColor="#6c63fe"
        passiveBorderColor="#6c63fe"
        passiveLabelColor="#bbb7ff"
        passiveValueColor="#bbb7ff"
        
      />
            <View style={{marginTop:30}}>

      </View>
      <OutlineInput 
        label="password"
        value={this.state.password}
        onChangeText={(val) => this.updateInputVal(val, 'password')}
        secureTextEntry={true}

        activeValueColor="#6c63fe"
        activeBorderColor="#6c63fe"
        activeLabelColor="#6c63fe"
        passiveBorderColor="#6c63fe"
        passiveLabelColor="#bbb7ff"
        passiveValueColor="#bbb7ff"
      />
    </SafeAreaView>
    <View style={styles.buttonContainer}>  
                    <Button  
                        title="Login"  
                        color="blue"  
                        onPress={() => this.userLogin()}

                    />  
                      </View>
          
          
                <TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => this.props.navigation.navigate('Signup')}>

              New Here ? Register
            </Text>
            </TouchableOpacity>

    </ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
   
  container: {
      flex: 1,
      flex: 1,
      flexDirection: "column",
    }, image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center',
  },
  buttonContainer: {  
    marginTop: 20,
    borderRadius:20,
    width: 25* 9,
    height: 45,
    borderWidth:5,
    borderColor:'blue',

  marginLeft:70,
  
  },
  registerTextStyle:
    {
      marginTop:40,
      color:'blue',
      marginLeft:100
    },
      
  });
 
