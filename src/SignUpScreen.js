import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SignUpScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SignInScreen');
  };

  const handleSignIn = () => {
    navigation.navigate('LocationScreen');
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
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
        <Text style={styles.title}>Register new account</Text>
        <Text>Please log in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Your name *"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Password *"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Email *"
          keyboardType="email-address"
          secureTextEntry={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone number *"
          keyboardType="phone-pad"
          secureTextEntry={false}
        />

       

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              isChecked ? { backgroundColor: 'green' } : null,
            ]}
            onPress={toggleCheckbox}
          >
            {isChecked && (
              <Icon name="check" size={16} color="white" style={styles.checkboxIcon} />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            By creating an account, you agree to our terms and conditions
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.dontHaveAccountText}>Already have an account?</Text>
        <View>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.otherSignUpBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.continueWithText}>Or continue with</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.appleButton} onPress={() => handleSignIn()}>
            <Icon name="apple" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={() => handleSignIn()}>
            <Icon name="google" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton} onPress={() => handleSignIn()}>
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
    paddingVertical:-180,
    marginTop:-40,

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
    paddingBottom: 110,
    paddingTop: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: -10,
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
    marginLeft: 20,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxIcon: {
    marginLeft: 1,
  },
  checkboxText: {
    marginLeft: 10,
    color: 'black',
  },
});

export default SignUpScreen;
