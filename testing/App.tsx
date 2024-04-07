import React from 'react';
import {View, Text, SafeAreaView, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme();
  return (
    <SafeAreaView>
      <View className="py-3 px-2 flex gap-3 flex-row">
        <View className="h-36 w-36 mx-3 rounded-lg bg-red-600 shadow-md ">
          <Text
            className={` ${
              isDarkMode === 'light' ? 'text-white' : 'text-black'
            } text-2xl font-bold mx-3 my-2`}>
            Card
          </Text>
        </View>
        <View className="h-36 w-36 mx-3 rounded-lg bg-red-600 shadow-md ">
          <Text className="text-2xl font-bold text-white/50 mx-3 my-2">
            Card
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
