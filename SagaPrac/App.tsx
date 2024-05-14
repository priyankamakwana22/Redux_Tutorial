import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPlace} from './src/redux/action';

const App = () => {
  const places = useSelector((state: any) => state.places);
  const placeName = useSelector((state: any) => state.placeName);
  // console.log("🚀 ~ App ~ placeName:", placeName)
  console.log('🚀 ~ App ~ places:', places);
  const dispatch = useDispatch();

  const [place, setPlace] = useState('');

  const placeSubmitHandler = () => {
    console.log('Button pressed');
    dispatch(addPlace(place));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Redux App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a place"
        onChangeText={value => setPlace(value)}
      />
      <Pressable style={styles.btn} onPress={() => placeSubmitHandler()}>
        <Text style={styles.txt}>Add Place</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {borderWidth: 1, borderRadius: 20, width: '90%'},
  txt: {fontSize: 20, color: 'black'},
  btn: {
    borderRadius: 20,
    borderWidth: 1,
    width: 150,
    height: 50,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
