import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  const handleNotifications= () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../src/Notification.png')}
          style={styles.image}
        />
      </View>



      <View style={styles.contentContainer}>
        <Text style={styles.heading}> Notifications</Text>
        <Text style={styles.paragraph}>
          With push notifications we will inform you  {'\n'} 
          about your progress,feedback and other{'\n'}
          important staff
        </Text>


        


        <TouchableOpacity onPress={handleNotifications} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Turn On Notifications</Text>
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
          width: '120%',
          height: 360,
          borderBottomLeftRadius: 170, 
          borderBottomRightRadius: 170,
        
    }, 
    image: {
                position: 'absolute',
                marginTop: 136,
                marginLeft: 50,
              
               
              }, 
  contentContainer: {
    alignItems: 'center',
    marginTop: 170,
    paddingHorizontal: -54,
  
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

export default NotificationScreen;
