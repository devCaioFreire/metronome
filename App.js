import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Pages
import Metronome from './pages/metronome/metronome';
import Chords from './pages/chords/chords';
import Chromatic from './pages/chromatic/chromatic';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Nav = NavigationContainer;

  // Icon Tab
  function IconMetronome() {
    return (
      <Image
        source={require('./assets/ICON_Metronome.png')}
        style={{ width: 25, height: 30 }}
      />
    )
  }
  function IconChords() {
    return (
      <Image
        source={require('./assets/ICON_Chords.png')}
        style={{ width: 22, height: 30 }}
      />
    )
  }
  function IconChromatic() {
    return (
      <Image
        source={require('./assets/ICON_Chromatic.png')}
        style={{ width: 30, height: 25 }}
      />
    )
  }

  return (
    <Nav>
      <Tab.Navigator
        initialRouteName='Metronomo'
        screenOptions={{
          tabBarStyle:
          {
            backgroundColor: '#252526',
            borderTopColor: '#00D938',
            borderTopWidth: 2
          },
          tabBarShowLabel: false,
          headerShown: false
        }}
      >
        <Tab.Screen
          name='Corda'
          component={Chords}
          options={{ tabBarIcon: IconChords, tabBarLabe: null }}
        />
        <Tab.Screen
          name='Metronomo'
          component={Metronome}
          options={{ tabBarIcon: IconMetronome }}
        />
        <Tab.Screen
          name='Cromático'
          component={Chromatic}
          options={{ tabBarIcon: IconChromatic }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </Nav>
  );
}