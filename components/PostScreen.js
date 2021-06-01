import React from 'react';
import {View,Text} from 'react-native'
import { Appbar,Avatar  } from 'react-native-paper';
const PostScreen = () => {
    return (
        <View>
            <Text>Post Screen</Text>
            <Avatar.Icon size={50} icon="message" />
        </View>
    );
};

export default PostScreen;