import { useAuth } from 'context/AuthContext';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  }

  return (
    <View className="flex-1 justify-center items-center bg-white p-8">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to the App!</Text>
      <Text className="text-base text-gray-600 mb-8 text-center">
        You have successfully logged in to the application.
      </Text>
      <TouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-lg"
        onPress={() => handleLogout()}
      >
        <Text className="text-white font-medium">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;