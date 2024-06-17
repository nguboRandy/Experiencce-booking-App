import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SignInScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SignInScreen');
  };
 

  const handleSignIn = ()=>{
    navigation.navigate('SignInScreen');
  };

  const handleSignUp = ()=>{
    navigation.navigate('SignUpScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../src/oloha_logo1.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Oloha</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back</Text>
        <Text>Please log in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email or Phone number"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />

        <Text style={styles.forgotText}>Forgot Password?</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.signInBtn} onPress={handlePress}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
        <View>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.otherSignUpBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.continueWithText}>Or continue with</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.appleButton} onPress={handleSignIn}>
            <Icon name="apple" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={handleSignIn}>
            <Icon name="google" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton} onPress={handleSignIn}>
            <Icon name="facebook" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    marginLeft: -7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 120,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 40,
    paddingVertical: 55,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  forgotText: {
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signInBtn: {
    backgroundColor: 'orange',
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10,
  },
  signInButtonText: {
    color: 'black',
  },
  otherSignUpBtn: {
    color: 'orange',
    textAlign: 'center',
    marginLeft: 120,
    marginTop: -15,
  },
  dontHaveAccountText: {
    marginTop: 10,
    marginLeft: 40,
  },
  continueWithText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20,
  },
  appleButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: 70, 
    alignItems: 'center', 
  },
  googleButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
  },
  facebookButton: {
    backgroundColor: '#01579B',
    padding: 10,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
  },
  icon: {
    color: 'white', 
  },
});

export default SignInScreen;
