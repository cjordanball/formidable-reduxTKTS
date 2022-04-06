import React from 'react';
import { Provider } from 'react-redux';
import { formidableStore } from '@app/appState/stores/formidableStore';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AboutScreen from '@screens/AboutScreen';
import PlayerScreen from '@screens/PlayerScreen';
import AlbumListScreen from '@screens/AlbumListScreen';
import PreferenceScreen from '@screens/PreferenceScreen';
import CounterComponent from '@app/components/CounterComponent';
import { Colors } from '@app/resources/specs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={formidableStore}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="About This App"
            component={AboutScreen}
            options={{
              tabBarIcon: () => {
                return <FontAwesome name="question" size={24} color={Colors.listTextPurple} />
              }
            }}
          />
          <Tab.Screen
            name={'Musical Styles'}
            component={PreferenceScreen}
            options={{
              tabBarIcon: () => {
                return <Ionicons name="musical-notes-outline" size={24} color={Colors.listTextPurple} />
              }
            }}
          />
          <Tab.Screen
            name='Albums'
            component={AlbumListScreen}
            options={{
              tabBarIcon: () => {
                return <MaterialCommunityIcons name="record-circle" size={24} color={Colors.listTextPurple} />
              }
            }}
          />
          <Tab.Screen
            name='Player'
            component={PlayerScreen}
            options={{
              tabBarIcon: () => {
                return <MaterialCommunityIcons name="disc-player" size={24} color={Colors.listTextPurple} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
