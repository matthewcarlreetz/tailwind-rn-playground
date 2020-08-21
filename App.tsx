import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => (
  <SafeAreaView style={tailwind('h-full')}>
    <View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 p-5 rounded-full')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>Hello Tailwind</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default App;
