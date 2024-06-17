import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('OnboardingScreen1');
  };


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
    <View>
      <Image source={require('../src/oloha_logo1.png')} 
        style={styles.logo}
      />
      <Text style={styles.text}>Oloha</Text>
    </View>
  
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 10, 
    borderRadius: 10, 
  },
  text: {
    fontSize: 34,
    marginLeft:10,
    fontWeight: 'bold',
    color:'white',
    
  },
});

export default SplashScreen;
