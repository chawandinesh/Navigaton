import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert} from 'react-native';
import OutlineInput from 'react-native-outline-input';
 

export default class Welcome extends Component {
    onPressButton() {  
    Alert.alert('You clicked the button!')  
} 


  
  render(){
  return (
    <View style={styles.container}>
         <ImageBackground source={require('../android/app/src/main/images/bgg.jpeg')} style={styles.image}>
   
<Image source={require('../android/app/src/main/images/maid.jpg')} style={styles.profileImg} />
<Text style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Welcome</Text>
<View style={styles.buttonContainer}>  
               <Button  
                   title="Get Started"  
                   color="black" 
                   onPress={() =>{this.props.navigation.navigate("Signup")}} 
               ></Button>
                    
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
RectangleShapeView: {

marginTop: 30,
marginLeft:10,
width: 100,
height: 120,
borderWidth:3,
borderColor:'black',
borderStyle:'solid',
borderWidth:4,
backgroundColor: '#dcdcdc',
borderTopEndRadius:80,
borderBottomEndRadius:40



},
ourRectangleShapeView:
{
 width: 120 * 3,
 height: 100,
 backgroundColor:'black',
 

},
buttonContainer: { 
 marginTop: 100,
 justifyContent: "space-between",
 borderColor:  'black',
 borderWidth:4,
 marginLeft:115,
 borderRadius:10,
 
 

width: 25* 6,
height: 40
},
mybuttonContainer:
{
 marginTop: 20,
 justifyContent: "space-between",
 borderColor:  'black',
 borderWidth:4,
 marginLeft:130,
 borderRadius:10,
 
},
ImageStyle: {
 padding: 10,
 margin: 5,
 height: 25,
 width: 25,
 resizeMode : 'stretch',
 alignItems: 'center',
 marginTop:55,
 marginLeft:20
},
profileImg: {
height: 200,
width: 200,
borderRadius:100,
borderWidth:2,
borderColor:'#00fa9a',
marginLeft:100,
marginTop:30
},
image: {
flex: 1,
resizeMode: "cover",
justifyContent: "center"
},




});


  
  
  
  

