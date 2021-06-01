import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallsScreen';
import { Appbar,Avatar,IconButton, Colors   } from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {

    //const route = useRoute();
    const [image, setImage] = useState("")
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => alert('Searching');
    const _handleMore = () => alert('Shown more');

    const [loader,setLoader] = useState(false)

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  
    // const onRefresh = () => {
    //     setLoader(true)
    //     setTimeout(() => {
    //       getAids()
    //       setLoader(false)
    //     }, 2000);
    //   };

    const openGallary = ()=>{
        launchCamera({quality:0.2},(fileobj)=>{
            try {
                let getUri = fileobj.assets.find(o => o.uri)
                setImage(getUri.uri)
            } catch (error) {
                setImage("")
            }
        
        })
    }

    return (
        <View style={styles.container}>

        <Appbar.Header style={styles.headerView}> 
            <Appbar.Content title="Lets Talk" style={styles.headerViewTitle}/>
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
        
        <Tab.Navigator 
         initialRouteName="Chat"    
         tabBarOptions={{
         activeTintColor: 'white',
         labelStyle: { fontSize: 15,fontWeight:'bold'},
         style: { backgroundColor: '#075E54',marginLeft:40},}}
         //screenOptions={{headerShown: false}}
        >
            {/* options={{headerShown: false}}  */}
             <Tab.Screen name="Chat" component={ChatScreen} />
             <Tab.Screen name="Status" component={StatusScreen} />
             <Tab.Screen name="Calls" component={CallsScreen} />
        </Tab.Navigator>
         <IconButton
            style={styles.fixBtn}
            icon="message"
            color={"white"}
            size={35}
            onPress={() => navigation.navigate('SelectContact')}
        />
        <View style={styles.fixBtn2}>
        <IconButton
        style={{opacity:0.6}}
            icon="camera"
            color={"white"}
            size={25}
            onPress={openGallary}
        /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    headerView : {
        height:60,
    },
    headerViewTitle : {
        fontSize:50,
    },
    fixBtn : {
        bottom : 30,
        right:30,
        position:'absolute',
        backgroundColor:'green'
    },
    fixBtn2 :{
        backgroundColor:'#075E54',
        top:58.8,
        left:-5,
        position:'absolute',
        zIndex:1,
        width:50,
        height:50,
    }

   
})

export default HomeScreen;