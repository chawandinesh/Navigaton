import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View,ImageBackground ,SafeAreaView} from 'react-native';
import firebase from '../android/app/src/Database/firebase'
import OutlineInput from 'react-native-outline-input';

class Userdetaile extends Component {

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

  updateUser() {
    this.setState({
      isLoading: true,
    });

    const updateDBRef = firebase.firestore().collection('users').doc(this.state.key);
    updateDBRef.set({
        name: this.state.name,
        Amount:this.state.Amount,
        date:this.state.date,
        phone:this.state.phone,
        duedate:this.state.duedate,
        monthin:this.state.monthin,
        Notes:this.state.Notes,
    }).then((docRef) => {
      this.setState({
        key: '',
        name:'',
        Amount:'',
        date:'',
        phone:'',
        duedate:'',
        monthin:'',
        Notes:'',
        isLoading: false,
      });
      this.props.navigation.navigate('Userscrren');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('Userscrren');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

  render() {
      
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



<View style={styles.button}>
          <Button
            title='Update'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
        </View>

</ScrollView>
















           
                     
          
              

    </ImageBackground>
    </View>
  );
}
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
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
})

export default Userdetaile;