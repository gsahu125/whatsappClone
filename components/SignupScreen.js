import React from 'react';
import { View,Text,StyleSheet,Image,Alert } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


const SignupScreen = ({navigation}) => {


    const [country, setCountry] = React.useState('');
    const [mobile, setMobile] = React.useState('');

    // const signupUser = async ()=>{
    //     if(email==="" || password==="")
    //     {
    //         setSignupErr("Email & Password must be enter")
    //         return;
    //     }

    //     try {
    //         await auth().createUserWithEmailAndPassword(email,password)
    //         //console.warn(result.user)
    //     } catch (error) {
    //         setSignupErr("Catch-Email & Password must be enter")
    //         return;
    //     }
    // }
   
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:25,opacity:0.6,lineHeight:25}}>Verify your phone number</Text>

            <Text style={{fontSize:20,color:'black',padding:30,opacity:0.6,lineHeight:30,textAlign:'center'}}>Lets Talk will send you an SMS message to verify your phone. Enter Your contry code and phone number</Text>

            <View style={{flex:1,paddingHorizontal:20,justifyContent:'space-evenly',height:'100%'}}> 
                <TextInput
                label="Select Country"
                mode="flat"
                value={country}
                onChangeText={text => setCountry(text)}
                />
                <TextInput
                label="Enter Mobile Number"
                mode="flat"
                secureTextEntry={true}
                value={mobile}
                onChangeText={text => setMobile(text)}
                keyboardType="numeric"
                />
                
                <Button style={{height:60,alignItems:'center',justifyContent:'center',borderRadius:10}} mode="contained" onPress={() => navigation.navigate('Profile')}>Next</Button>

            </View> 

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'space-evenly',
        marginVertical:100
    }
})

export default SignupScreen;