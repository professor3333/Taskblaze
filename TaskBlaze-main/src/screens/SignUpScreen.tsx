import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TextInputBase,
  KeyboardAvoidingView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {WIDTH, HEIGHT} from 'utils/dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IProps {}

/**
 * @author
 * @function @loginScreen
 **/

const SignUpScreen: FC<IProps> = props => {
  const navigation=useNavigation();
  const {
    container,
    textStyle,
    headingText,
    subhead,
    headingTextView,
    askView,
    askView1,
    button,
    subhead1,
    enterText,
    enterTextStyle,
    buttonStyle,
  } = styles;
  return (
    <KeyboardAwareScrollView style={container}>
    <SafeAreaView >
        
      <TouchableOpacity onPress={()=> navigation.navigate('LoginEmailScreen' as never)}>
        <Text style={textStyle}>Have Account? Log In</Text>
      </TouchableOpacity>
      <View style={headingTextView}>
        <Text style={headingText}>Sign Up</Text>
      </View>
      <View style={askView}>
        <Text style={subhead}>Sign Up To Continue</Text>
      </View>
      <View style={askView1}>
        <Text style={subhead1}>YOUR EMAIL</Text>
      </View>
      <View style={enterText}>
        <TextInput style={enterTextStyle} placeholder="Your email here" inputMode='email' placeholderTextColor='lightgrey' underlineColorAndroid='black'/>
      </View>
      <View style={askView1}>
        <Text style={subhead1}>YOUR PASSWORD</Text>
      </View>
      <View style={enterText}>
        <TextInput
          style={enterTextStyle}
          placeholder="Your Password Here"
          secureTextEntry={true}
          placeholderTextColor="lightgrey"
          underlineColorAndroid="black"
          multiline={false}
        />
      </View>
      <TouchableOpacity style={button} onPress={()=> navigation.navigate('UserInfoScreen'as never)}>
        <Text style={buttonStyle}>Continue</Text>
      </TouchableOpacity>
      
    </SafeAreaView></KeyboardAwareScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontSize: 20,
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginRight: 30,
    marginTop: 50,
    marginBottom:30,
  },

  headingTextView: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 50,
  },
  headingText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 45,
    fontWeight: '500',
  },
  subhead: {
    fontSize: 18,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
    textTransform: 'capitalize',
  },
  askView: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  askView1: {
    height: 'auto',
    width: 'auto',
    marginLeft: 30,
    marginTop: 50,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 50,
    backgroundColor: 'royalblue',
    width: WIDTH - 100,
    borderRadius: 25,
    textDecorationLine: 'underline',
    height: 70,
    alignItems: 'center',
  },
  subhead1: {
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  enterText: {
    marginTop: 25,
    width: 350,
    marginLeft: 25,
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  enterTextStyle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
    textTransform: 'lowercase',
  },
  buttonStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
});

export default SignUpScreen;
