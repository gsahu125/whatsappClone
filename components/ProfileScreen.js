import React, { useState } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({navigation }) => {

    const [profileName,setProfileName] = useState("")

    // const loginUser = async ()=>{
    //     if(email==="" || password==="")
    //     {
    //         setLoginErr("Email & Password must be enter")
    //         return;
    //     }
    //     try {
    //        const result = await auth().signInWithEmailAndPassword(email,password)
    //         //console.warn(result.user)
    //     } catch (error) {
    //         setLoginErr("Email & Password must be enter")
    //         return;
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:25,opacity:0.6,lineHeight:25,marginTop:50}}>Profile Information</Text>

            <Text style={{textAlign:'center',fontSize:18,opacity:0.6,lineHeight:25,marginTop:30}}>Please provide your name and option profile photo</Text>

            <View style={styles.itemBar}>
                    <View style={{flex:1}}>
                    <Image 
                    style={{width:80,height:80}}
                    source={{uri:'https://p.kindpng.com/picc/s/109-1095065_camera-cam-device-photo-shot-mode-mobile-phone.png'}}
                    />
                    </View>
                    <View style={{flex:2}}>
                    <TextInput
                    label="Profile Name"
                    mode="outlined"
                    value={profileName}
                    onChangeText={text => setCountry(text)}
                    />
                    </View>
            </View>

            <View style={{flex:1,paddingHorizontal:20,justifyContent:'space-evenly',height:'100%'}}> 
               
                
                <Button onPress={()=>alert('profile created')} style={{height:60,alignItems:'center',justifyContent:'center',borderRadius:10}} mode="contained">Agree and continue</Button>
            </View> 

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'white',
    },
    itemBar : {
        fontSize:20,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',padding:50
    }
})

export default ProfileScreen;