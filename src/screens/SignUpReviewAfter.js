import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {API_ENDPOINT} from '../config/sugarRush';
import CustomButton from '../components/CustomButton';
import WorkExperienceDisplay from '../components/WorkExperiencesDisplay';

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
      setData(response.data.data);
    } catch (e) {
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
          <Text style={styles.title}>Account Details</Text>
          <Text style={styles.key}>First Name:</Text>
          <Text style={styles.text}>{data.user.first_name}</Text>

          <Text style={styles.key}>Last Name:</Text>
          <Text style={styles.text}>{data.user.last_name}</Text>

          <Text style={styles.key}>Date of Birth:</Text>
          <Text style={styles.text}>{data.user.date_of_birth}</Text>

          <Text style={styles.key}>Email:</Text>
          <Text style={styles.text}>{data.user.email}</Text>

          <Text style={styles.key}>Address 1:</Text>
          <Text style={styles.text}>{data.user.address_1}</Text>

          <Text style={styles.key}>Address 2:</Text>
          <Text style={styles.text}>{data.user.address_2}</Text>

          <Text style={styles.key}>County:</Text>
          <Text style={styles.text}>{data.user.county}</Text>

          <Text style={styles.key}>Country:</Text>
          <Text style={styles.text}>{data.user.country}</Text>

          <Text style={styles.key}>Postcode:</Text>
          <Text style={styles.text}>{data.user.postcode}</Text>

          <Text style={styles.experiencesText}>{'Experiences'}</Text>

          <WorkExperienceDisplay
            experiences={data.experiences}
            deleteEnabled={false}
          />
          <Text style={styles.key}>Industires</Text>
          <Text style={styles.text}>{'' + data.industries}</Text>
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
    color: 'black',
    margin: 10,
    paddingBottom: 20,
  },
  experiencesText: {
    fontWeight: 'bold',
    color: '#3B71F3',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  text: {
    color: 'black',
    marginVertical: 10,
  },
  key: {
    fontWeight: 'bold',
    color: '#3B71F3',
  },
});
