import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  const {width, height} = useWindowDimensions();

  const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView>
        <View style={{...globalStyles.flexDirectionRow, marginTop: 10}}>
          <Image
            source={{
              uri:
                'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png',
            }}
            style={globalStyles.image}
          />
        </View>

        <View style={globalStyles.menuContainer}>
          <TouchableOpacity
            style={globalStyles.opcionesMenu}
            onPress={() => navigation.navigate('Tabs')}>
            <Text style={globalStyles.opcionesMenuTxt}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.opcionesMenu}
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Text style={globalStyles.opcionesMenuTxt}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        drawerType: width > height ? 'permanent' : 'front',
        headerShown: false,
        swipeEnabled: true,
        drawerHideStatusBarOnOpen: false,
        swipeMinDistance: 50,
        swipeEdgeWidth: 50,
      }}
      useLegacyImplementation={true}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuLateral;
