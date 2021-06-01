import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge,Avatar } from 'react-native-paper';

const CallsScreen = (props) => {
    const userData =[
        {uid:1,name:'hempushpa sahu',newNotification:10,lastmsg:'Good morning dear'},
        {uid:2,name:'Gajendra sahu',newNotification:10,lastmsg:'Good morning dear'},
        {uid:3,name:'Tamesh sahu',newNotification:10,lastmsg:'Good morning dear'},
        {uid:4,name:'Sandi',newNotification:10,lastmsg:'Good morning dear'},
        {uid:5,name:'Hp',newNotification:10,lastmsg:'Good morning dear'},
        {uid:6,name:'Monty',newNotification:10,lastmsg:'Good morning dear'},
        {uid:7,name:'Pawan',newNotification:10,lastmsg:'Good morning dear'},
        {uid:8,name:'Manisha',newNotification:10,lastmsg:'Good morning dear'},
    ]
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.listViewContainer}>
            {
                userData.map((user)=>{
                    return(
                        <TouchableOpacity key={user.uid} style={styles.listView}>
                            <Image
                            style={{flex:3,width:70,height:70,marginTop:-10}}
                            source={{uri:'https://w7.pngwing.com/pngs/104/119/png-transparent-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo-silhouette.png'}}
                            />
                            <View style={{flex:7}}><Text style={{fontSize:16,fontWeight:'bold'}}>{user.name}</Text><Text style={{opacity:0.6}}>Good morning msg</Text></View>
                            <View style={{flex:1}}><Ionicons name="videocam-outline" size={25} color="green"/></View>
                            
                        </TouchableOpacity>
                    )
                })
            }
                
                
            </View>
            {/* <Avatar.Icon style={styles.fixBtn} size={50} icon="phone" /> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        width:'100%',   
    },
    listViewContainer : {
        padding:20,
        flex:1,
    },
    listView : {
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        width:'100%',
        marginBottom:20,
    },
    fixBtn : {
        bottom : 30,
        right:30,
        position:'absolute',
        backgroundColor:'green'
    },
})

export default CallsScreen;