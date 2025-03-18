import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-8">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Profile Page</Text>
    </View>
  );
};

export default ProfileScreen;