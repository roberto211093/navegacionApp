import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colores} from '../theme/appTheme';

const Tab1Screen = () => {
  const myIcon = <Icon name="rocket" size={30} color={colores.primary} />;
  const {top} = useSafeAreaInsets();
  return (
    <View style={{paddingTop: top}}>
      <Text>{myIcon}</Text>
    </View>
  );
};

export default Tab1Screen;
