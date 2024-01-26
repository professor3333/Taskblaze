import { task } from 'assets/xml/task';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import VectorImage from 'react-native-vector-image';




interface IProps {}

/**
 * @author
 * @function @userinfo
 **/

const UserInfoScreen: FC<IProps> = props => {
  const {container, imageView,svgStyle} = styles;
  return (

    <SafeAreaView style={container}>
        <VectorImage source={require('../assets/images/tasks-boss-svgrepo-com.dark.svg')} style={svgStyle}/>
      <View style={imageView}>
        <Text>Upload Image</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300,
  },
  svgStyle:{
    height:100,
    width:100,
  }
});
export default UserInfoScreen;
