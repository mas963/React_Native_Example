import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-8">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to the App!</Text>
      <Text className="text-base text-gray-600 mb-8 text-center">
        You have successfully logged in to the application.
      </Text>
      <TouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-lg"
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-white font-medium">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;