import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from 'react-native-config';

const About = () => {
  return (
    <SafeAreaView>
      <Text>ENV: {Config.APP_CONFIG}</Text>
    </SafeAreaView>
  );
};

export default About;
