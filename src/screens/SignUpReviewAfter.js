import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {API_ENDPOINT} from '../config/sugarRush';
import CustomButton from '../components/CustomButton';

const SignUpReviewAfter = ({navigation, route}) => {
  const {key} = route.params;
  const [data, setData] = useState();

  const onPress = () => {
    navigation.navigate('Landing');
  };

  const fetchAPI = async () => {
    try {
      const response = await axios.get(API_ENDPOINT + '/profile', {
        headers: {
          'Xfe-User-Key': key,
        },
      });
      console.log('Success');
      setData(response.data.data);
      console.log(response.data.data);
    } catch (e) {
      console.log('Error');
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (data) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {'First Name: ' + data.user.first_name}
          </Text>
          <Text style={styles.text}>{'Last Name: ' + data.user.last_name}</Text>
          <Text style={styles.text}>
            {'Date of Birth: ' + data.user.date_of_birth}
          </Text>
          <Text style={styles.text}>{'Email: ' + data.user.email}</Text>
          <Text style={styles.text}>{'Address 1: ' + data.user.address_1}</Text>
          <Text style={styles.text}>{'Address 2: ' + data.user.address_2}</Text>
          <Text style={styles.text}>{'County: ' + data.user.county}</Text>
          <Text style={styles.text}>{'Country: ' + data.user.country}</Text>
          <Text style={styles.text}>{'Postcode: ' + data.user.postcode}</Text>
          <Text style={styles.text}>{'Experiences'}</Text>
          <Text style={styles.text}>
            {'start date: ' + data.experiences.start_date}
          </Text>
          <Text style={styles.text}>
            {'end date: ' + data.experiences.end_date}
          </Text>
          <Text style={styles.text}>{'role: ' + data.experiences.role}</Text>
          <Text style={styles.text}>
            {'description: ' + data.experiences.description}
          </Text>
          <Text style={styles.text}>{'Industires: ' + data.industries}</Text>
          <CustomButton text="Continue" onPress={onPress} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}></View>
    </ScrollView>
  );
};

export default SignUpReviewAfter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
});
