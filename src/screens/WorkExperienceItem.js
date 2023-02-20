import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {Slice, useAppDispatch} from '../state';

const WorkExperienceItem = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({
    start_date: '',
    end_date: '',
    role: '',
    description: '',
  });
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(Slice.userSignup.actions.addExperience(userDetails));
    navigation.navigate('ExperienceWork', userDetails);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Add your Work Experience</Text>

        <CustomInput
          placeholder="Start Date"
          value={userDetails.start_date}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{start_date: e},
            }));
          }}
        />
        <CustomInput
          placeholder="End Date"
          value={userDetails.end_date}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{end_date: e},
            }));
          }}
        />
        <CustomInput
          placeholder="Role"
          value={userDetails.role}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{role: e},
            }));
          }}
        />
        <CustomInput
          placeholder="Role Description"
          value={userDetails.description}
          setValue={e => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{description: e},
            }));
          }}
        />
        <CustomButton text="Add" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

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
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
});

export default WorkExperienceItem;
