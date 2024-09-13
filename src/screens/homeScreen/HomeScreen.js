import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'; // You need to install react-native-vector-icons
import {Fonts} from '../../assets/fonts/Fonts';
import {FontSize} from '../../assets/constants';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing',
        {},
        {
          headers: {
            Authorization:
              'Bearer 148|QwsMFixT9w9MgleAbukZtghUuKNZGxgR1SYDOVMk',
          },
        },
      );
      console.log('abcd', response.data.data.events);
      setEvents(response.data.data.events); // Correctly set the events array
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      {/* Left side - Image */}
      <Image
        source={{uri: item.event_profile_img}}
        style={styles.eventImage}
        resizeMode="cover"
      />

      {/* Right side - Event Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.eventName}>{item.event_name}</Text>
        <Text style={styles.eventDate}>{`${item.readable_from_date} - ${
          item.readable_to_date || 'Ongoing'
        }`}</Text>
        <Text
          style={
            styles.eventPrice
          }>{`Price: ${item.event_price_from} - ${item.event_price_to}`}</Text>
        <View style={styles.keywordsContainer}>
          {item.keywords.map((keyword, index) => (
            <Text key={index} style={styles.keyword}>
              {keyword}
            </Text>
          ))}
        </View>
      </View>

      {/* Favorite Icon */}
      <TouchableOpacity style={styles.favoriteIcon}>
        <Icon
          name={item.isFavorite ? 'heart' : 'heart-o'}
          size={wp('5%')}
          color="#21d393"
        />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: wp(3),
          paddingVertical: wp(4),
          marginBottom: wp(4),
        }}>
        <Text
          style={{
            fontFamily: Fonts.BOLD,
            fontSize: FontSize.bigText,
            color: 'black',
          }}>
          Hello Renzo!
        </Text>
        <Text
          style={{
            fontFamily: Fonts.REGULAR,
            fontSize: FontSize.normalText,
            color: 'black',
          }}>
          Are you ready to dance?
        </Text>
      </View>
      <FlatList
        data={events}
        keyExtractor={item => item.event_id.toString()} // Use event_id instead of id
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: wp('5%'),
    backgroundColor: '#E5E4E2',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: wp('4%'),
    marginBottom: wp('2%'),
    backgroundColor: '#f9f9f9',
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: wp(3),
  },
  eventImage: {
    width: wp('20%'),
    height: hp('12%'),
    borderRadius: wp('2%'),
    marginRight: wp('4%'),
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  eventName: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginTop: hp('0.5%'),
  },
  eventPrice: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginTop: hp('0.5%'),
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp('1%'),
  },
  keyword: {
    fontSize: wp('3%'),
    color: '#555',
    backgroundColor: '#e0e0e0',
    paddingVertical: hp('0.3%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('1%'),
    marginRight: wp('1%'),
    marginBottom: hp('0.5%'),
  },
  favoriteIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
