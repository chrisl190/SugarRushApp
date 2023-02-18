import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import { API_ENDPOINT } from '../config/sugarRush';
import CustomButton from '../components/CustomButton';

const SignUpReviewAfter = ({navigation, route,}) => {
  const { key } = route.params;
  const [data, setData] = React.useState();

  const onPress = () => {
    navigation.navigate('Landing');
  };

  const fetchAPI = async () => {
    try {
      const response = await axios.get(API_ENDPOINT + '/profile', {
        headers: {
          'Xfe-User-Key': key
        }});
      console.log('Success');
      setData(response.data.data);
      console.log(response.data.data);
    } catch (e) {
      console.log('Error');
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>
        {/* {'First Name:' + data.data.experiences} */}
        </Text>
        <Text style={styles.text}>
        {'Last Name:'}
        </Text>
        <Text style={styles.text}>
        {'Date of Birth:'}
        </Text>
        <Text style={styles.text}>
        {'Email:'}
        </Text>
        <Text style={styles.text}>
        {'Address 1:'}
        </Text>
        <Text style={styles.text}>
        {'Address 2:'}
        </Text>
        <Text style={styles.text}>
        {'County:'}
        </Text>
        <Text style={styles.text}>
        {'Country:'}
        </Text>
        <Text style={styles.text}>
        {'Postcode:'}
        </Text>
        <Text style={styles.text}>
        {'Password:'}
        </Text>
        <Text style={styles.text}>
        {'Password confirm:'}
        </Text>
        <Text style={styles.text}>
        {'Terms and Conditions:'}
        </Text>
        <Text style={styles.text}>
        {'Experiences: '}
        </Text>
        <Text style={styles.text}>
        {'start date: ' }
        </Text>
        <Text style={styles.text}>
        {'end date: ' }
        </Text>
        <Text style={styles.text}>
        {'role: '}
        </Text>
        <Text style={styles.text}>
        {'description: '}
        </Text>
        <Text style={styles.text}>
        {'Industires: '}
        </Text>
        <CustomButton text="Continue" onPress={onPress} />
      </View>
    </ScrollView>
  );
};

export default SignUpReviewAfter;

const styles = StyleSheet.create({
  root: {
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
  checkbox: {
    paddingLeft: 20,
  },
  link: {
    color: '#FDB075',
  },
});
