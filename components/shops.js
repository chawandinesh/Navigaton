import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert,ActivityIndicator} from 'react-native';
import OutlineInput from 'react-native-outline-input';
import firebase from '../android/app/src/Database/firebase'

export default class Shops extends Component {
  constructor() {
    super();
    this.state = {
        name:'',
        Amount:'',
        date:'',
        phone:'',
        duedate:'',
        monthin:'',
        Notes:'',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          name: user.name,
      Amount:user.Amount,
      date:user.date,
      phone:user.phone,
      duedate:user.duedate,
      monthin:user.monthin,
      Notes:user.Notes,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 



  onPressButton() {  
    Alert.alert('You clicked the button!')  
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
                        onPress={() =>{ this.props.navigation.navigate('Shops', {
                          userkey: item.key})}} />
                     
                      </View>
                      </View>

<View style={{marginTop:100}}></View>
                      <Text>Name: {this.state.name}</Text>
                      <Text> Amount:{this.state.Amount}</Text>
                      <Text>Date:{this.state.date}</Text>
                      <Text>Phone:{this.state.phone}</Text>
                      <Text>Duedate:{this.state.duedate}</Text>
                      <Text>Monthinc:{this.state.monthin}</Text>
                      <Text>Notes:{this.state.Notes}</Text>


                      


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
      
  });


  
  
  
  

