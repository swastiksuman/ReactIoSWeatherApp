import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

const App: () => React$Node = () => {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Swastik');
  const [temperature, setTemperature] = useState(0);

  useEffect(()=>{axios
    .get("http://api.openweathermap.org/data/2.5/weather?q=London&appId=293a0ddf7702211b1d931aa932e2848e")
    .then((response)=>{setTemperature(parseInt(response.data.main.temp)-273)});

}, []);
  //api.openweathermap.org/data/2.5/weather?q=London&appId=293a0ddf7702211b1d931aa932e2848e

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          
            <View>
          <Text>{counter} - {name} - {temperature}</Text>
            <Button onPress={()=>setCounter(counter +1)} title="Counter">Counter</Button>
            </View>
          
            
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
