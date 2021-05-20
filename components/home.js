import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert} from 'react-native';
import OutlineInput from 'react-native-outline-input';
 

export default class Home extends Component {
    onPressButton() {  
    Alert.alert('You clicked the button!')  
} 


  
  render(){
  return (
    <View style={styles.container}>
         <ImageBackground source={require('../android/app/src/main/images/bgg.jpeg')} style={styles.image}>
         
            <View style={{flexDirection:'row'}}>
            <View style={styles.buttonContainer}>  
                    <Button  
                        title="Unpaid"  
                        color="gray"  
                        onPress={() =>{this.props.navigation.navigate("Peple")}} 

                    />  
                      </View>
                      <View style={styles.mybuttonContainer}>  
                    <Button  
                        title="Paid"  
                        color="gray"  
                        onPress={() =>{this.props.navigation.navigate("Shops")}} 

                    />  
                      </View>
                      </View>
          
              

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
    },
     image: {
      flex: 1,
      resizeMode: "cover",
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
    borderRadius:20,
    width: 25* 7,
    height: 45,
    borderWidth:5,
    borderColor:'black',

  marginVertical:15,
  margin:10
  
  },
  mybuttonContainer:
  {
    borderRadius:20,
    width: 25* 7,
    height: 45,
    borderWidth:5,
    borderColor:'black',
    marginVertical:15,

  },
  registerTextStyle:
    {
      marginTop:40,
      color:'blue',
      marginLeft:100
    },
      
  });


  
  
  
  

