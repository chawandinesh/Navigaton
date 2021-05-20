import React, { Component } from 'react'
import {  AppRegistry,ImageBackground, SafeAreaView,View,StyleSheet,Image ,Text,Button,TouchableOpacity,Alert,FlatList} from 'react-native';
import OutlineInput from 'react-native-outline-input';
 

export default class Peple extends Component {
    onPressButton() {  
    Alert.alert('You clicked the button!')  
} 
state = {
    data:[
      {
        "name": "Education Loans",
        "quntity": "pack of 12",
        "prize": "$158.55",
        "photo": require('../android/app/src/main/images/edc.png')
      },
    {
      "name": "Vehicle Loans",
      "quntity":"pack of 6",
      "prize": "$89.88",
      "photo": require('../android/app/src/main/images/edc.png')
    },
    {
      "name": "Business Loans",
      "quntity":"pack of 6",
      "prize": "$53.36",
      "photo": require('../android/app/src/main/images/edc.png')
    },
    {
      "name": "Property Loans",
      "quntity": "pack of 12",
      "prize": "$158.55",
        
      "photo": require('../android/app/src/main/images/edc.png')
    },
    {
      "name": "Home Loans",
      "quntity": "pack of 12",
      "prize": "$45.46",
      "photo": require('../android/app/src/main/images/edc.png')
    },
    {
      "name": "Credit Cards",
      "quntity": "pack of 12",
      "prize": "$158.55",
      "photo": require('../android/app/src/main/images/edc.png')

    },
    {
      "name": "Personal Loans",
      "quntity": "pack of 12",
      "prize": "$158.55",
      "photo": require('../android/app/src/main/images/edc.png')
    },
    {
      "name": "Wedding Loans",
      "quntity": "pack of 12",
      "prize": "$158.55",
      "photo": require('../android/app/src/main/images/edc.png')
    },
    { "name": " Home renovation Loans",
    "quntity": "pack of 12",
    "prize": "$158.55",
    "photo": require('../android/app/src/main/images/edc.png')
  },
    { "name": "Travel Loans",
    "quntity": "pack of 12",
    "prize": "$158.55",
    "photo": require('../android/app/src/main/images/edc.png')
  },
    { "name": "Medical Loans",
    "quntity": "pack of 12",
    "prize": "$158.55",
    "photo": require('../android/app/src/main/images/edc.png')
  },
    { "name": "Debt Consolidation Loans",
    "quntity": "pack of 12",
    "prize": "$158.55",
    "photo": require('../android/app/src/main/images/edc.png')
  },
    { "name": "Any Other Loans ",
    "quntity": "pack of 12",
    "prize": "$158.55",
    "photo": require('../android/app/src/main/images/edc.png')
  },
    
    ]
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
                      <View style={{marginTop:30}}></View>
                      <FlatList
 data={this.state.data}
 renderItem={({ item }) => 
 
 <View style={styles.listItem}>
   
   <View style={styles.RectangleShapeView} 
 >

     <Text>
     <View style={{flexDirection:'row'}}>
     <Image source={item.photo}  style={{width:73, height:73,borderRadius:40}} />
     <View style={{alignItems:"center",flex:1}}>
     <TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() =>{this.props.navigation.navigate("Userscrren")}} 

              >
                {item.name}
            </Text>
            </TouchableOpacity>

  
</View>

                   
                    </View>
                    
     </Text>
       
</View>
 </View>

}
keyExtractor={(item,index) => index} 
 
/>
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
      fontWeight:"bold",marginLeft:30,marginTop:20,fontSize:20,color:'blue'
    },
    RectangleShapeView: {

        marginTop: 20,
        margin:10,
        width: 120 *2.9,
        height: 80,
        borderWidth:3,
        borderColor:'blue',
        borderStyle:'solid',
        borderWidth:4,
        
        backgroundColor: 'white',
        
        borderRadius:50,
    
        
        },
        myRectangleShapeView:
        {
            width: 120 * 4,
            height: 80,
            
            
            backgroundColor: 'blue',
            
        
        },
        tabsbuttonContainer:
        {
            
            borderRadius:20,
            width: 25*4,
            height: 45,
            marginVertical:15,
            margin:10
        


        }
      
  });


  
  
  
  

