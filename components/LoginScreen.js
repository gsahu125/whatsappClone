import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation }) => {

    const loginUser = async ()=>{
        if(email==="" || password==="")
        {
            setLoginErr("Email & Password must be enter")
            return;
        }
        try {
           const result = await auth().signInWithEmailAndPassword(email,password)
            //console.warn(result.user)
        } catch (error) {
            setLoginErr("Email & Password must be enter")
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:25,opacity:0.6,lineHeight:25,marginTop:50}}>Welcome to Lets Talk</Text>
            <View style={{flex:1,fontSize:20,justifyContent:'space-evenly',height:'100%',alignItems:'center'}}>
                <Image 
                style={{width:200,height:200,borderRadius:100}}
                source={{uri:'https://previews.123rf.com/images/sn333g/sn333g1901/sn333g190100211/115099149-mobile-app-development-vector-outline-seamless-pattern.jpg'}}
                />
            </View>

            <View style={{flex:1,paddingHorizontal:20,justifyContent:'space-evenly',height:'100%'}}> 
               
                <Text style={{textAlign:'center',fontSize:18,opacity:0.6,lineHeight:25}}>Tap the Agree and continue to accept the <Text style={{color:'green',fontWeight:'bold'}}>Lets Talk</Text> terms and condition service and policy</Text>
                <Button style={{height:60,alignItems:'center',justifyContent:'center',borderRadius:10}} mode="contained" onPress={()=>navigation.navigate('Signup')}>Agree and continue</Button>
            </View> 

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'white',
    }
})

export default LoginScreen;