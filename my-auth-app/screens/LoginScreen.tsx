import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from 'context/AuthContext';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/navigation';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const { login } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    login();
    navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <StatusBar style="dark" />
      <ScrollView contentContainerClassName="flex-grow">
        <View className="flex-1 justify-center px-8 pt-10 pb-8">
          {/* Logo and Title */}
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">A</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">Welcome Back</Text>
            <Text className="text-sm text-gray-500 mt-1">Sign in to continue</Text>
          </View>

          {/* Input Fields */}
          <View className="mb-6">
            <Text className="text-sm font-medium text-gray-700 mb-1">Email</Text>
            <View className="flex-row border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                className="flex-1 text-base text-gray-800"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-sm font-medium text-gray-700 mb-1">Password</Text>
            <View className="flex-row border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 items-center">
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                className="flex-1 text-base text-gray-800"
              />
              <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <Text className="text-blue-500">
                  {secureTextEntry ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="self-end mb-6">
            <Text className="text-blue-500 font-medium">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-lg items-center mb-6"
            onPress={() => handleLogin()}
          >
            <Text className="text-white font-bold text-base">Login</Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <View className="flex-1 h-0.5 bg-gray-200" />
              <Text className="mx-4 text-gray-500">Or login with</Text>
              <View className="flex-1 h-0.5 bg-gray-200" />
            </View>

            <View className="flex-row justify-center space-x-4">
              <TouchableOpacity className="w-12 h-12 border border-gray-300 rounded-full items-center justify-center">
                <Text className="text-lg font-bold text-blue-600">G</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-12 h-12 border border-gray-300 rounded-full items-center justify-center">
                <Text className="text-lg font-bold text-blue-800">f</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-12 h-12 border border-gray-300 rounded-full items-center justify-center">
                <Text className="text-lg font-bold text-black">X</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Register Link */}
          <View className="flex-row justify-center">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-blue-500 font-medium">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;