import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{paddingTop: top}}>
      <Text>
        <TouchableIcon name="heart" />
        <TouchableIcon name="rocket" />
        <TouchableIcon name="play" />
        <TouchableIcon name="user" />
        <TouchableIcon name="home" />
        <TouchableIcon name="image" />
        <TouchableIcon name="users" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
