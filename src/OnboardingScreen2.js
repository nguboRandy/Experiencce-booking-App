import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../src/OnboardingTwoImage.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Discover Amazing Places</Text>
        <Text style={styles.paragraph}>
          Plan Your Trip, choose your {'\n'}
          destination.Pick the best localguide {'\n'} for your holiday
        </Text>

        <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.firstDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        
        <Text style={styles.skipText}>skip for now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'black',
    width: '110%',
    height: 360,
    borderBottomLeftRadius: 170,
    borderBottomRightRadius: 170,
  },
  image: {
    position: 'absolute',
    marginTop: 111,
    marginLeft: 15,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 120,
    paddingHorizontal: 54,
    backgroundColor: '#E4E4E4',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingBottom: 60,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  firstDot: {
    backgroundColor: 'orange',
  },
  skipText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default OnboardingScreen2;
