import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const WelcomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('HomeScreen');

    
  };
  const handleSignIn = () => {
    navigation.navigate('LocationScreen');
  };
  const handleSignUp = () => {
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
        <Text style={styles.title}>Welcome to Oloha</Text>
        <Text style={styles.subtitle}>Live life with no excuses, travel with no regret</Text>

      
        <TouchableOpacity style={styles.appleButton} onPress={ handleSignIn}>
          <Icon name="apple" size={24} color="white"  style={styles.icon}/> 
          <Text style={styles.buttonText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={handleSignIn}>
          <Icon name="google" size={24} color="white"  style={styles.icon} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton} onPress={handleSignIn}>
          <Icon name="facebook" size={24} color="white"  style={styles.icon}/>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.guestButton} onPress={handlePress}>
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
          <Text style={styles.orText}> or</Text>
        </TouchableOpacity>

        
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.signInbtn} onPress={handleSignIn}>
         <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.signUpbtn} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    marginTop:120,
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
    
    marginBottom: 10,
    marginTop:80,
    paddingHorizontal: 40,
    paddingVertical: 55,
    borderRadius:30,

    backgroundColor:'white',
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,

  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,

  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#01579B',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,

  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginHorizontal: 40,
   

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
   
  },
  guestButton: {
    marginVertical: 10,
  },
  guestButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signInbtn: {
    backgroundColor: 'orange',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  signUpbtn: {
    backgroundColor: 'black',
    color: 'white,',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  signInButtonText:{
    color:'black',
  },
  signUpButtonText:{
    color:'white',
  },
  orText:{
    textAlign:'center',

  },
});

export default WelcomeScreen;
