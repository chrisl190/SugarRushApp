import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {API_ENDPOINT} from '../config/sugarRush';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

function Industries({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  // const [data, setData] = React.useState([
  //   {id: 1, industry: 'HGV Driver', selected: false},
  //   {id: 2, industry: 'General Hand'},
  //   {id: 3, industry: 'Plant Operator'},
  //   {id: 4, industry: 'Bricklayer'},
  //   {id: 5, industry: 'Joiner'},
  //   {id: 6, industry: 'Excavator Operator'},
  //   {id: 7, industry: 'Accounts Staff'},
  //   {id: 8, industry: 'Delivery Person'},
  //   {id: 9, industry: 'Gardener'},
  //   {id: 10, industry: 'Developer'},
  //   {id: 11, industry: 'Designer'},
  //   {id: 12, industry: 'Cleaner'},
  //   {id: 13, industry: 'Painter'},
  //   {id: 14, industry: 'Bingpot'},
  // ]);

  openList = () => setOpen(true);
  closeList = () => setOpen(false);
  onUpdateValue = (index, value) => {
    data[index].selected = value;
    return setData([...data]);
  };

  const fetchAPI = async () => {
    try {
      const response = await axios.get(API_ENDPOINT + '/industries');
      console.log('Success');
      console.log(response.data.data);
      setData(response.data.data);
    } catch (e) {
      console.log('Error');
      console.log(e);
    }
  };

  const onPress = () => {
    navigation.navigate('SignUpReviewBefore');
  }

  React.useEffect(() => {
    fetchAPI();
  }, []);

  renderItem = ({item, index}) => (
    <ItemRenderer
      key={item.id}
      index={index}
      selected={item.selected}
      industry={item.industry}
      onUpdateValue={onUpdateValue}
    />
  );
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>
          Select the industries you have worked in
        </Text>
        <TouchableOpacity onPress={openList}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Industries</Text>
          </View>
        </TouchableOpacity>
        <View>
          {data
            .filter(item => item.selected)
            .map(item => (
              <Text key={item.id}>{item.industry}</Text>
            ))}
        </View>
        <CustomButton onPress={onPress} text={'Next'}/>
      </View>
      <Modal animationType="slide" transparent={true} visible={open === true}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeList}
          style={{flex: 1}}>
          <View style={{flex: 1, marginTop: 250}}>
            <View style={styles.listWrapper}>
              <View style={styles.listContainer}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.industry}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const ItemRenderer = ({index, industry, selected, onUpdateValue}) => (
  <View style={styles.item}>
    <Text style={styles.text}>{industry}</Text>
    <Switch
      value={selected}
      onValueChange={value => onUpdateValue(index, value)}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  listWrapper: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC55',
  },
  tabHeading: {
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  text: {
    textTransform: 'capitalize',
    color: '#000',
    fontSize: 10,
  },
  buttonStyle: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3B71F3',
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: 'white',
  }
});

export default Industries;
