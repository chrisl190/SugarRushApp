import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function WorkExperience({navigation}) {
  const [userDetails, setUserDetails] = useState({
    start_date: '',
    end_date: '',
    role: '',
    description: '',
  });
  const [experiences, setExperiences] = useState([]);

  const onSubmit = () => {
    //setExperiences([...userDetails, { key: Date.now() }]);
    navigation.navigate('ExperienceIndustries', userDetails);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Add your Work Experience</Text>

        <CustomInput
          placeholder="Start Date"
          value={userDetails.start_date}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{'start_date': e},
            }));
          }}
        />
        <CustomInput
          placeholder="End Date"
          value={userDetails.end_date}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{'end_date': e},
            }));
          }}
        />
        <CustomInput
          placeholder="Role"
          value={userDetails.role}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{'role': e},
            }));
          }}
        />
        <CustomInput
          placeholder="Role Description"
          value={userDetails.description}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{'description': e},
            }));
          }}
        />
        <CustomButton text="Add" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
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

export default WorkExperience;
