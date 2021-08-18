import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import TopTab from './TopTab';
import StackNavigation from './StackNavigation';
import {colores} from '../theme/appTheme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        backgroundColor: Platform.OS === 'ios' ? '#fff' : colores.primary,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: colores.primary,
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'TopTab':
              iconName = 'T2';
              break;

            case 'StackNavigation':
              iconName = 'ST';
              break;

            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <Tab.Screen name="TopTab" component={TopTab} options={{title: 'Tab 2'}} />
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{title: 'Stack'}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
