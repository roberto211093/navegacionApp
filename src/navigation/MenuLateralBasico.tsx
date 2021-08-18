import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="StackNavigation"
      screenOptions={{
        drawerType: width > height ? 'permanent' : 'front',
        headerShown: false,
        swipeEnabled: true,
        //drawerActiveBackgroundColor: 'red',
      }}>
      <Drawer.Screen
        name="StackNavigation"
        options={{title: 'Home'}}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
