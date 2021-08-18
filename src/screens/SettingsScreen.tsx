import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  console.log('insets', insets);

  return (
    <View style={{marginTop: insets.top}}>
      <Text style={globalStyles.title}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
