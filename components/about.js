import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert} from 'react-native';
import OutlineInput from 'react-native-outline-input';
 
export default class About extends Component {

  onPressButton() {  
    Alert.alert('You clicked the button!')  
} 


  
  render(){
  return (
    <View style={styles.container}>
         <ImageBackground source={require('../android/app/src/main/images/bgg.jpeg')} style={styles.image}>
         
           
                      <View style={styles.myRectangleShapeView} >

<View style={{flexDirection:'row'}}>

<View style={styles.tabsbuttonContainer}>  
                    <Button  
                        title="add item"  
                        color="blue"  
                        onPress={() =>{this.props.navigation.navigate("Item")}} 

                    />  
                    </View>
                    <View style={styles.tabsbuttonContainer}>  
                    <Button  
                        title="Profile"  
                        color="blue"  
                        onPress={() =>{this.props.navigation.navigate("Profile")}} 

                    />  
                    </View>
                    <View style={styles.tabsbuttonContainer}>  
                    <Button  
                        title="About Us"  
                        color="blue"  
                        onPress={() =>{this.props.navigation.navigate("About")}} 

                    />  
                    </View>
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

  marginVertical:15
  
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
    myRectangleShapeView:
    {
        marginTop:550,
        width: 120 * 4,
        height: 200,
        
        
        backgroundColor: 'blue',
        
    
    },
    tabsbuttonContainer:
    {
        
        borderRadius:20,
        width: 25*4,
        height: 45,
        marginVertical:30,
        margin:10
    


    }
      
  });


  
  
  
  

