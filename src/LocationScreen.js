import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LocationScreen = ({ navigation }) => {
  const handleLocation = () => {
    navigation.navigate('NotificationScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../src/LocationImage.png')}
          style={styles.image}
        />
      </View>



      <View style={styles.contentContainer}>
        <Text style={styles.heading}> Location Services</Text>
        <Text style={styles.paragraph}>
          Get the best recommendations of things to {'\n'} 
          do near you! Oloha will need to enable{'\n'}
          location services for this
        </Text>


        


        <TouchableOpacity onPress={handleLocation} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Turn On Location</Text>
        </TouchableOpacity>
        
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
                marginTop: 150,
                marginLeft: 50,
              
               
              }, 
  contentContainer: {
    alignItems: 'center',
    marginTop: 120,
    paddingHorizontal: 54,
  
    marginLeft:20,
    marginRight:20,
    borderRadius: 10,
    paddingBottom:60,
  },

  heading: {
    fontSize: 24,
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
  
  nextButton: {
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
   
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  middleDot:{
    backgroundColor:'orange',
  }
});

export default LocationScreen;
