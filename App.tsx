import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen';
import BookAppointmentScreen from './src/screens/BookAppointmentScreen';
import BookDiagnosticScreen from './src/screens/BookDiagnosticScreen';
import LoginScreen from './src/screens/LoginScreen';
import MobileScreen from './src/screens/MobileScreen';
import OtpScreen from './src/screens/OtpScreen';
import SearchDoctorScreen from './src/screens/SearchDoctorScreen';
import SelectCityScreen from './src/screens/SelectCityScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="land-screen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="land-screen" component={LandingScreen} />
        <Stack.Screen name="appointment-screen" component={BookAppointmentScreen} />
        <Stack.Screen name="diagnostic-screen" component={BookDiagnosticScreen} />
        <Stack.Screen name="login-screen" component={LoginScreen} />
        <Stack.Screen name="mobile-screen" component={MobileScreen} />
        <Stack.Screen name="otp-screen" component={OtpScreen} />
        <Stack.Screen name="select-city-screen" component={SelectCityScreen} />
        <Stack.Screen name="search-doctor-screen" component={SearchDoctorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App