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
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';

function WorkExperienceView({ navigation, route }){
  const items = [];

  const onPressAdd = () => {
    navigation.navigate('ExperienceWorkItem');
  };

  const onPressNext = () => {
    navigation.navigate('ExperienceIndustries');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <CustomButton onPress={onPressAdd} text={'Add'}/>
    <View style={styles.root}>
      { items.map((item) => <View style={styles.details}>
        <Text style={styles.text}>
          <Text style={styles.key}>Start Date: </Text>
          <Text>{item.start_date}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>End Date: </Text>
          <Text>{item.end_date}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Role: </Text>
          <Text>{item.role}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Role Description: </Text>
          <Text>{item.description}</Text>
        </Text>

        <Icon
          name="trash-2"
          size={30}
          color="#900"
          style={{ marginLeft: 'auto' }}
          onPress={() => console.log('Delete')}
        />
        </View>
      )}
      </View>
      <CustomButton onPress={onPressNext} text={'Next'}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
      },
      text: {
        color: 'black',
        marginVertical: 10,
      },
      details: {
        marginBottom: 15
      },
      key: {
        fontWeight: 'bold',
        color: '#3B71F3',
      },
});

export default WorkExperienceView;
