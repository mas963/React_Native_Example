import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState<boolean>(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <StatusBar style="dark" />
      <ScrollView contentContainerClassName="flex-grow">
        <View className="flex-1 px-8 pt-12 pb-8">
          {/* Header with Back Button */}
          <TouchableOpacity 
            className="w-10 h-10 items-center justify-center mb-4"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-2xl text-gray-700">←</Text>
          </TouchableOpacity>

          {/* Title */}
          <View className="mb-8">
            <Text className="text-2xl font-bold text-gray-800">Create Account</Text>
            <Text className="text-sm text-gray-500 mt-1">Sign up to get started</Text>
          </View>

          {/* Input Fields */}
          <View className="mb-5">
            <Text className="text-sm font-medium text-gray-700 mb-1">Full Name</Text>
            <View className="flex-row border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
              <TextInput
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          <View className="mb-5">
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

          <View className="mb-5">
            <Text className="text-sm font-medium text-gray-700 mb-1">Password</Text>
            <View className="flex-row border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 items-center">
              <TextInput
                placeholder="Create a password"
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

          <View className="mb-8">
            <Text className="text-sm font-medium text-gray-700 mb-1">Confirm Password</Text>
            <View className="flex-row border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 items-center">
              <TextInput
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={secureConfirmTextEntry}
                className="flex-1 text-base text-gray-800"
              />
              <TouchableOpacity onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}>
                <Text className="text-blue-500">
                  {secureConfirmTextEntry ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms and Conditions */}
          <View className="flex-row items-start mb-6">
            <View className="w-5 h-5 border border-gray-300 rounded mr-2 mt-1" />
            <Text className="flex-1 text-gray-600 text-sm">
              By creating an account, you agree to our{' '}
              <Text className="text-blue-500">Terms of Service</Text> and{' '}
              <Text className="text-blue-500">Privacy Policy</Text>
            </Text>
          </View>

          {/* Register Button */}
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-lg items-center mb-6"
            onPress={() => navigation.navigate('Home')}
          >
            <Text className="text-white font-bold text-base">Create Account</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View className="flex-row justify-center">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-blue-500 font-medium">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;