import React, { Component } from 'react';
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert,ActivityIndicator } from 'react-native';
import OutlineInput from 'react-native-outline-input';
import firebase from '../android/app/src/Database/firebase'


export default class Signup extends Component {
  
    constructor() {
      super();
      this.state = { 


        email: '', 
        password: '',
        displayName: '',


        isLoading: false
      }
    }
  
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    registerUser = () => {
      if(this.state.email === '' && this.state.password === '') {
      
        Alert.alert('Enter details to signup!')
      }
        else if(this.state.email.length<9)
        {
          Alert.alert('Enter valid email to signup!')

        }
        
       else {
        this.setState({
          isLoading: true,
        })
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName

          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            displayName: '',
            email: '', 
            password: '',
            Name:''
          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState( Alert.alert('Enter valid email to signup!')

          ))    
  
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
         
    <SafeAreaView style={{margin:15,marginTop:200 }}>
    

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
            <View style={{marginTop:25}}>

      </View>
      <OutlineInput 
              label="Password"

       value={this.state.password}
       onChangeText={(val) => this.updateInputVal(val, 'password')}


        activeValueColor="#6c63fe"
        activeBorderColor="#6c63fe"
        activeLabelColor="#6c63fe"
        passiveBorderColor="#6c63fe"
        passiveLabelColor="#bbb7ff"
        passiveValueColor="#bbb7ff"
      />
       <View style={{marginTop:25}}>

</View>
<OutlineInput 
  label=" confiram password"
  value={this.state.displayName}
  onChangeText={(val) => this.updateInputVal(val, 'displayName')}

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
                        title="Create Account"  
                        color="blue"  
                        onPress={() => this.registerUser()}

                    />  
                      </View>
          
          
                <TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => this.props.navigation.navigate('Login')}>

              Allready  Register ? Sign in
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
      marginTop:20,
      color:'blue',
      marginLeft:100
    },
      
  });
 
