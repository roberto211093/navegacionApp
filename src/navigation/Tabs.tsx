import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import TopTab from './TopTab';
import StackNavigation from './StackNavigation';
import {colores} from '../theme/appTheme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIos = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

const Tabs = () =>
  Platform.OS === 'ios' ? <TabsIosScreen /> : <TabAndroidScreen />;

const TabsIosScreen = () => {
  return (
    <TabIos.Navigator
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
              iconName = 'page-first';
              break;

            case 'TopTab':
              iconName = 'play';
              break;

            case 'StackNavigation':
              iconName = 'page-last';
              break;

            default:
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={30} color={colores.primary} />
            </Text>
          );
        },
      })}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <TabIos.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <TabIos.Screen
        name="TopTab"
        component={TopTab}
        options={{title: 'Tab 2'}}
      />
      <TabIos.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{title: 'Stack'}}
      />
    </TabIos.Navigator>
  );
};

const TabAndroidScreen = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
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
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'page-first';
              break;

            case 'TopTab':
              iconName = 'play';
              break;

            case 'StackNavigation':
              iconName = 'page-last';
              break;

            default:
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={30} color={color} />
            </Text>
          );
        },
      })}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <TabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <TabAndroid.Screen
        name="TopTab"
        component={TopTab}
        options={{title: 'Tab 2'}}
      />
      <TabAndroid.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{title: 'Stack'}}
      />
    </TabAndroid.Navigator>
  );
};

export default Tabs;
