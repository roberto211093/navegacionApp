import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarPressColor: colores.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: colores.primary,
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubble-ellipses-outline';
              break;

            case 'ContactsScreen':
              iconName = 'md-megaphone-outline';
              break;

            case 'AlbumScreen':
              iconName = 'albums-outline';
              break;

            default:
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={24} color={colores.primary} />
            </Text>
          );
        },
      })}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumScreen"
        options={{title: 'Album'}}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
};

export default TopTab;
