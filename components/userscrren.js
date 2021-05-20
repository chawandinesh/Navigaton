import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View ,dispatchEvent,Button,Image} from 'react-native'
import {ListItem} from 'react-native-elements'
import firebase from '../android/app/src/Database/firebase'


class Userscrren extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    
    this.state = {
      isLoading: true,
      status:false,


      userArr: []
    };
  }
  

  
  ShowHideTextComponentView = () =>{

    if(this.state.status == true)
    {
      this.setState({status: false})
    }
    else
    {
      this.setState({status: true})
    }
  }
  

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  
  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name,Amount,date,phone,duedate,monthin,Notes} = res.data();
      userArr.push({
        key: res.id,
        res,
        name ,
        Amount,
      date,
      phone,
      duedate,
      monthin,
      Notes,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  render() {
   
      console.log(this.state.userArr, 'userarr')
    if(this.state.isLoading){dispatchEvent
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (

    
      <ScrollView style={styles.container}>
        
          {
            
           this.state.userArr.length ? this.state.userArr.map((item, i) => {
               console.log(item,'item')
               
               
              return (
                // <ListItem
                //   key={i}
                //   chevron
                //   bottomDivider
                //   title={item.name}
                //   amount = {item.Amount}
                //   date={item.date}
                //   phone={item.phone}
                //   duedate={item.duedate}
                //   monthin={item.monthin}
                //   notes={item.Notes}

                //   />
                <View style={styles.MainContainer} >
                  
                

                  {
                   this.state.status ? <ListItem key={i} bottomDivider
                   
                   >
                     <View style={{flexDirection:'row'}}>
                     <Image source={require('../android/app/src/main/images/maid.jpg')} style={styles.profileImg} />
                     <View>


                    <ListItem.Content>
                      <ListItem.Title style={{fontSize:20,color:'blue',}}>Name:{item.name}</ListItem.Title>
                      <ListItem.Subtitle style={{fontSize:20,color:'red',}}>Amount:{item.Amount}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{fontSize:20,color:'blue',}}>Date:{item.date}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{fontSize:20,color:'red',}}> phone: {item.phone}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{fontSize:20,color:'blue',}}>duedate: {item.duedate}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{fontSize:20,color:'red',}}>monthin: {item.monthin}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{fontSize:20,color:'blue',}}>Notes:{item.Notes}</ListItem.Subtitle>
                     
                     
                    </ListItem.Content>
                    </View>
                    <Button  style={{height: 80,
    width: 80,}}title="Paid"  onPress={() => {
                    this.props.navigation.navigate('Shops', {
                      userkey: item.key})}} />
                     
                    </View>
                  </ListItem>
                  : null
                  }
                   
                    
                   <Button title="View data/Hide data" onPress={this.ShowHideTextComponentView} />

                  
                      <View style={{marginTop:20}}>

</View>

                   
                  <Button title="Upadate data/Delete data"  onPress={() => {
                    this.props.navigation.navigate('Userdetaile', {
                      userkey: item.key})}} />
                      

                </View>
              );
            })
            : null
          }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingBottom: 22
  },
  preloader: {
    right: 10,
    top: 10,
    bottom: 10,
    
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius:100,
    borderWidth:2,
    borderColor:'#00fa9a',
    marginLeft:0,
    marginTop:30
    },
})

export default Userscrren;