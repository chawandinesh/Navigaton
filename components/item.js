import React, {Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert,ScrollView,ActivityIndicator} from 'react-native';
import OutlineInput from 'react-native-outline-input';
import firebase from '../android/app/src/Database/firebase'

import {launchCamera,launchImageLibrary} from 'react-native-image-picker';


export default class Item extends Component {

  

    constructor()
  {
    super();
    
    this.dbRef = firebase.firestore().collection('users');


    this.state={
      name:'',
      Amount:'',
      date:'',
      phone:'',
      duedate:'',
      monthin:'',
      Notes:'',
      photo:null,

      isLoading: false

    }


  }




  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
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
  

  
  
 
  
storeUser() {
  if(this.state.name === ''){
   alert('Fill at least your name!')
  } else {
    this.setState({
      isLoading: true,
    });      
    this.dbRef.add({
      name: this.state.name,
      Amount:this.state.Amount,
      date:this.state.date,
      phone:this.state.phone,
      duedate:this.state.duedate,
      monthin:this.state.monthin,
      Notes:this.state.Notes,
      photo:this.state.photo
     
    }).then((res) => {
      this.setState({
        name: '',
        Amount:'',
      date:'',
      phone:'',
      duedate:'',
      monthin:'',
      Notes:'',
      photo:'',
        isLoading: false,
      });
      this.props.navigation.navigate('Userscrren')
    })
    .catch((err) => {
      console.error("Error found: ", err);
      this.setState({
        isLoading: false,
      });
    });
  }
}



  
  render(){
    const {photo}=this.state;

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
             <ScrollView>
         <SafeAreaView style={{margin:15,marginTop:50}}>

<OutlineInput

  label="Memaber Name"
  value={this.state.name}
  onChangeText={(val) => this.inputValueUpdate(val, 'name')}


  activeValueColor="#6c63fe"
  activeBorderColor="#6c63fe"
  activeLabelColor="#6c63fe"
  passiveBorderColor="#6c63fe"
  passiveLabelColor="#bbb7ff"
  passiveValueColor="#bbb7ff"
  
/>
      <View style={{marginTop:20}}>

</View>
<OutlineInput 
  label="Amount"
  value={this.state.Amount}

  onChangeText={(val) => this.inputValueUpdate(val, 'Amount')}

  activeValueColor="#6c63fe"
  activeBorderColor="#6c63fe"
  activeLabelColor="#6c63fe"
  passiveBorderColor="#6c63fe"
  passiveLabelColor="#bbb7ff"
  passiveValueColor="#bbb7ff"
/>
 <View style={{marginTop:20}}>

</View>

<OutlineInput 
label="Given Date: DD-MM-YYYY"
value={this.state.date}

onChangeText={(val) => this.inputValueUpdate(val, 'date')}

activeValueColor="#6c63fe"
activeBorderColor="#6c63fe"
activeLabelColor="#6c63fe"
passiveBorderColor="#6c63fe"
passiveLabelColor="#bbb7ff"
passiveValueColor="#bbb7ff"
/>

<View style={{marginTop:20}}>

</View>
<OutlineInput 
label="Phone No"
value={this.state.phone}
onChangeText={(val) => this.inputValueUpdate(val, 'phone')}


activeValueColor="#6c63fe"
activeBorderColor="#6c63fe"
activeLabelColor="#6c63fe"
passiveBorderColor="#6c63fe"
passiveLabelColor="#bbb7ff"
passiveValueColor="#bbb7ff"
/>
<View style={{marginTop:20}}>

</View>
<OutlineInput 
label="Due Date: DD-MM-YYYY"
value={this.state.duedate}

onChangeText={(val) => this.inputValueUpdate(val, 'duedate')}

activeValueColor="#6c63fe"
activeBorderColor="#6c63fe"
activeLabelColor="#6c63fe"
passiveBorderColor="#6c63fe"
passiveLabelColor="#bbb7ff"
passiveValueColor="#bbb7ff"
/>
<View style={{marginTop:20}}>

</View>
<OutlineInput 
label="Monthly Intrest"
value={this.state.monthin}

onChangeText={(val) => this.inputValueUpdate(val, 'monthin')}

activeValueColor="#6c63fe"
activeBorderColor="#6c63fe"
activeLabelColor="#6c63fe"
passiveBorderColor="#6c63fe"
passiveLabelColor="#bbb7ff"
passiveValueColor="#bbb7ff"
/>
<View style={{marginTop:20}}>

</View>
<OutlineInput 
label="Notes"
value={this.state.Notes}

onChangeText={(val) => this.inputValueUpdate(val, 'Notes')}

activeValueColor="#6c63fe"
activeBorderColor="#6c63fe"
activeLabelColor="#6c63fe"
passiveBorderColor="#6c63fe"
passiveLabelColor="#bbb7ff"
passiveValueColor="#bbb7ff"
/>
</SafeAreaView>

<View style={{width:80,height:60}} >

                                 {photo && (
                                   <Image source= {{uri:photo.uri}}
                                   style={{width:80,height:60}}/> 
                                 )}
                                 <View style={styles.tabsbuttonContainer}>  
                                 <Button
                                 title="Choose pic"  
                                 color="blue"  
                                 onPress={this.handelchosepic} 
         
                                 ></Button>
                                 </View>
                                 
                                 </View>

<View style={styles.buttonContainer}>  
              <Button  
                  title="Submit"  
                  color="blue"  
                  onPress={() => this.storeUser()} 

              />  
                </View>


</ScrollView>
















           
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

  marginVertical:30,
  margin:120
  
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
        marginTop:10,
        width: 120 * 4,
        height: 100,
        
        
        backgroundColor: 'blue',
        
    
    },
    tabsbuttonContainer:
    {
        
        borderRadius:20,
        width: 25*4,
        height: 45,
        marginVertical:20,
        margin:10
    


    }
      
  });


  
  
  
  

