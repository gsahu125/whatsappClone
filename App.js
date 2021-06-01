import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { Provider as PaperProvider, Button, DefaultTheme} from 'react-native-paper';
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'
import SelectContactScreen from './components/SelectContactScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    //primary: '#075E54',
    primary:'#075E54',
    accent: '#f1c40f',
    background : '#f2f2f2'
  },
};


const App = () => {

    const [loginUser,setLoginUser] = useState("")

    useEffect(() => {
      var unsubscribe = auth().onAuthStateChanged((userExist)=>{
          if(userExist)
          {
            setLoginUser(userExist)
          }else{
            setLoginUser("")
          }
      })
      return unsubscribe();
    }, []);


  return (

    <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#128C7E"/>
         <PaperProvider theme={theme}>
        {
            !loginUser ? 
            <Stack.Navigator
            initialRouteName="Home"
            //screenOptions={{headerShown: false}}
            >
              <Stack.Screen name="Home" component={HomeScreen}  options={{ title:""}}/>
              <Stack.Screen name="profile" component={ProfileScreen}  options={{ title:"Profile"}}/>
              <Stack.Screen name="SelectContact" component={SelectContactScreen}  options={{ title:"Select Contact"}}/>
            </Stack.Navigator>
          : 
          <Stack.Navigator
          initialRouteName="Login"
            screenOptions={{headerShown: false}}
          >
              <Stack.Screen name="Login" component={LoginScreen}  options={{ title:""}}/>
              <Stack.Screen name="Signup" component={SignupScreen} options={{ title:""}}/>
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ title:""}}/>
         </Stack.Navigator>
        }
        </PaperProvider>
      </NavigationContainer>
      
  );
};

export default App;