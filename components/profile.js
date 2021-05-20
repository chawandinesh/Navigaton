import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert} from 'react-native';
import OutlineInput from 'react-native-outline-input';
 
import firebase from '../android/app/src/Database/firebase'


import {launchCamera,launchImageLibrary} from 'react-native-image-picker';


export default class Profile extends Component {
  state={
    photo:null,
  };
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  handelchosepic = () =>
  {
    const options={
      noData:true
    };
    launchImageLibrary(options,response => {
      console.log("response",response);
      if (response.uri)
      {
        this.setState({photo:response})
      }
    });

  };
  
    onPressButton() {  
    Alert.alert('You clicked the button!')  
} 


  
  render(){
    const {photo}=this.state;
    this.state = { 
      Name: firebase.auth().currentUser.Name,

      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid
    }    
    
  return (
    <View style={styles.container}>
                               <View style={styles.RectangleShapeView} >

                                 {photo && (
                                   <Image source= {{uri:photo.uri}}
                                   style={styles.profileImg}/> 
                                 )}
                                 <View style={styles.tabsbuttonContainer}>  
                                 <Button
                                 title="Choose pic"  
                                 color="blue"  
                                 onPress={this.handelchosepic} 
         
                                 ></Button>
                                 </View>
                                 
                                 </View>

           
                                 <View style={ styles.myfiedRectangleShapeView}>
                                 <Text style={{fontSize:17,fontWeight:'bold',margin:20}}>User Name:{this.state.Name}</Text>

                                 </View>
                                 <View style={ styles.myfiedRectangleShapeView}>
                                 <Text  style={{fontSize:17,fontWeight:'bold',margin:20}}>Email Id: {this.state.email}</Text>
 
                                 </View>


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
                        onPress={() =>{this.props.navigation.navigate("Myprofile")}} 

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
    RectangleShapeView:
    {
      
      width: 120 * 4,
      height: 350,
      
      
      backgroundColor: 'pink',
      
  

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
        marginTop:50,
        width: 120 * 4,
        height: 100,
        
        
        backgroundColor: 'blue',
        
    
    },
    myfiedRectangleShapeView:
    {
      marginTop:2,

        width: 120 * 4,
        height: 70,
        
        
        backgroundColor: 'white',
    },
    tabsbuttonContainer:
    {
        
        borderRadius:20,
        width: 25*4,
        height: 45,
        marginVertical:30,
        margin:10
    


    },
    profileImg: {
      height: 100,
      width: 100,
      borderRadius: 50,
      marginTop:50,
       borderWidth:5.7,
      borderColor:'white',
      alignItems:'center',
      marginLeft:130,
      marginTop:150
    },
      
  });


  
  
  
  

