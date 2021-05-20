import * as React from 'react';
console.disableYellowBox = true;
import {NavigationContainer}   from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import Login from './components/login'
import Signup  from "./components/signup"
import Profile from './components/profile'
import Peple from  './components/Peple'
import Shops from './components/shops'
import Item from './components/item'
import Home from './components/home'
import About from './components/about'
import Userscrren from './components/userscrren'
import Welcome from './components/welcome'
import Userdetaile from './components/userdetaile'





const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ title: 'Welcome' }}
      />       
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'}
        }
      />
      <Stack.Screen 
       name="Home" 
       component={Home}
       options={
         { title: 'Home' }
       }
      />
       <Stack.Screen 
       name="Peple" 
       component={Peple}
       options={
         { title: 'Peple' },
         {headerLeft: null} 
       }
      />
       <Stack.Screen 
       name="Shops" 
       component={Shops}
       options={
         { title: 'Shops' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="Profile" 
       component={Profile}
       options={
         { title: 'Profile' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="Item" 
       component={Item}
       options={
         { title: 'Item' }
       }
      />
      
      <Stack.Screen 
       name="About" 
       component={About}
       options={
         { title: 'About' },
         {headerLeft: null} 
       }
      />
       <Stack.Screen 
       name="Userscrren" 
       component={Userscrren}
       options={
         { title: 'Userscrren' }
       }
      />
      <Stack.Screen 
       name="Userdetaile" 
       component={Userdetaile}
       options={
         { title: 'Userdetaile' }
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

  