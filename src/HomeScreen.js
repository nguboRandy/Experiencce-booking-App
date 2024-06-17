import React from 'react';
import { View, Text, StyleSheet, Image ,FlatList, index} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      activeTintColor: 'orange', 
      style: { backgroundColor: 'white' },
    }}>
      <Tab.Screen
        name="Home"
        component={HomeTabScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="globe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Travel Packages',
          headerShown: false,
          tabBarStyle: { backgroundColor: 'white' }, 
          tabBarIcon: ({ color, size }) => (
            <Icon name="globe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          tabBarLabel: 'Itinerary',
          tabBarStyle: { backgroundColor: 'white' },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tabfour"
        component={TabFourScreen}
        options={{
          tabBarLabel: 'Itinerary',
          tabBarStyle: { backgroundColor: 'white' },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-secret" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          tabBarLabel: 'Leap',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const experiences = [
  {
    id: '1',
    title: 'Coffee * Cultural Tour',
    image: require('../src/experience1.png'),
    description: 'Unique EGG Coffee class with Local',
    rating:'4.5*',
    price: 'R200/Person',

  },
  {
    id: '2',
    title: 'Street Food',
    image: require('../src/experience2.png'),
    description: 'Hanoi Old',
  },
  
];

const HomeTabScreen = () => {
  const renderExperienceCard = ({ item }) => (

    <View style={styles.experienceCard}>
    <Image source={item.image} style={styles.experienceImage} />
    <Text style={styles.experienceTitle}>{item.title}</Text>
    <Text style={styles.experienceDescription}>{item.description}</Text>
    <View style={styles.ratingPriceContainer}>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="green" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <View style={styles.priceBackground}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>
  </View>
);

  return (
    <View style={styles.container}>
    
    <View style={styles.header}>
      <Text style={styles.headerText}>Johannesburg, Gauteng</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherText}>17°C</Text>
        <Icon name="cloud" size={24} style={styles.weatherIcon} />
      </View>
      <Icon name="search" size={24} style={styles.searchIcon} />
    </View>

    
    <View style={styles.profileImagesContainer}>
      <Image
        source={require('../src/ProfileImageFour.png')}
        style={styles.profileImage}
      />
      <Image
        source={require('../src/ProfileImageTwo.png')}
        style={styles.profileImage}
      />
      <Image
        source={require('../src/ProfileImageThree.png')}
        style={styles.profileImage}
      />
      <Image
        source={require('../src/ProfileImageOne.png')}
        style={styles.profileImage}
      />
      <Image
        source={require('../src/ProfileImageFive.png')}
        style={styles.profileImage}
      />
    </View>


    <View style={styles.greyLine}></View>

  
    <Text style={styles.experienceText}>Experiences in Spotlight</Text>
    <Carousel
      data={experiences}
      renderItem={renderExperienceCard}
      sliderWidth={350}
      itemWidth={250}
      layout="default"
      loop={false}
      inactiveSlideScale={1}
      itemWidth={300} 
      marginTop={20}
      marginLeft={-15}

      
    />
    <View style={styles.greyLine2}></View>

    <View style={styles.smallImagesContainer}>
        <View style={styles.smallImageItem}>
          <Image
            source={require('../src/food.png')}
            style={styles.smallImage}
          />
          <Text style={styles.smallImageDescription}>Foods</Text>
        </View>
        <View style={styles.smallImageItem}>
          <Image
            source={require('../src/groceries.png')}
            style={styles.smallImage}
          />
          <Text style={styles.smallImageDescription}>Groceries</Text>
        </View>
        <View style={styles.smallImageItem}>
          <Image
            source={require('../src/hotel.png')}
            style={styles.smallImage}
          />
          <Text style={styles.smallImageDescription}>Hotels</Text>
        </View>
        <View style={styles.smallImageItem}>
          <Image
            source={require('../src/Events.png')}
            style={styles.smallImage}
          />
          <Text style={styles.smallImageDescription}>Events</Text>
        </View>
      </View>

      <View style={styles.greyLine3}></View>

    
  </View>
);
};

const Tab2Screen = () => {
    const travelPackages = [
      {
        id: '1',
        destination: 'Thailand',
        description: 'Friendly locals and Cuisine to die for, the nightlife is like no other!',
        price: 'R200',
      },
      {
        id: '2',
        destination: 'New York',
        description: 'Real and raw is the core of New York ,rich in culture and history!',
      
      },
    ];
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.travelPackageItem}>
      <Text style={styles.destination}>{item.destination}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.ratingPriceContainer}>
        <Text style={styles.price}>{item.price}</Text> 
      </View>
    </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={travelPackages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const Tab3Screen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Booked Activities</Text>
  
        <View style={styles.activityContainer}>
          <Text style={styles.activityTitle}>Activity 1: Snorkeling</Text>
          <Text style={styles.activityDescription}>
            Enjoy a day of snorkeling at the beautiful coral reefs.
          </Text>
        </View>
  
       
        <View style={styles.activityContainer}>
          <Text style={styles.activityTitle}>Activity 2: Sightseeing</Text>
          <Text style={styles.activityDescription}>
            Explore the local landmarks and scenic spots in the area.
          </Text>
        </View>
  
       
        <View style={styles.activityContainer}>
          <Text style={styles.activityTitle}>Activity 3: Cooking Class</Text>
          <Text style={styles.activityDescription}>
            Learn to cook delicious local cuisine in a fun cooking class.
          </Text>
        </View>
      </View>
    );
  };

  const TabFourScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.tab4Text}>
          Change your life and travel the Oloha way
        </Text>
      </View>
    );
  };
  const Tab4Screen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.tab4Text}>
          Change your life and travel the Oloha way
        </Text>
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop:10,
        
        
      },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    
      },
      profileImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom:20,
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      weatherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      weatherText: {
        marginRight: 5,
      },
      weatherIcon: {
        color: 'orange',
        marginLeft:-230,
        marginTop:40,
      },
      searchIcon: {
        color: 'black',
        marginTop:20,
       
      },
      greyLine: {
        height: 2,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        marginBottom:20,
      },
      greyLine2: {
        height: 2,
        backgroundColor: 'lightgrey',
        // marginBottom:200,
        marginVertical:50,

        
      
        
        
      },
      greyLine3: {
        height: 2,
        backgroundColor: 'lightgrey',
       marginVertical:5,
        
      
        
        
      },
      
      
      experienceText:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:8,
        marginBottom: 5,
        marginLeft: 10,

      },
     
      text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
      
      },
      text1:{
        marginTop:-30,
        color:'white',
        fontWeight: '900',
        marginLeft: -10,
        fontSize: 20,
    
      },
      welcome:{
        textAlign:'center',
        position:'absolute',
        top:-40,
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
        
      },
      travelPackageItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginTop:200,
      },
      destination: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', 
      },
      description: {
        fontSize: 16,
        color: 'gray',
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green', 
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'white',
      },
      activityContainer: {
        marginBottom: 20,
      },
      activityTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',

      },
      activityDescription: {
        fontSize: 16,
        color: 'gray',
      },
      tab4Text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white',
      },
      headerText:{
        fontWeight:'bold',
        fontSize:16,

      },
      ratingPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      
        
      },
      ratingContainer: {
        backgroundColor:'green',
        position:'absolute',
        left:200,
        top:-40,
        borderRadius:10,
        paddingBottom:5,
        paddingTop:-15,
      


      },
      ratingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'white',
        
      },
      priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange',
        position:'absolute',
        left:200,
        marginTop:10,
      },
      smallImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',    
        paddingHorizontal:10,
        
       
        
      
       
      },
      smallImageItem: {
        alignItems: 'center',
        
      },
      smallImage: {        
        width: 70,
        height: 80,
        borderRadius: 10,       
        borderWidth: 1, 
        borderColor: 'gray', 
       
       
      },
      smallImageDescription: {
        marginTop:5,
        fontSize: 12,
        color: 'gray',
        textAlign:'center',
      },
    
      
    
    
    });

export default HomeScreen;
