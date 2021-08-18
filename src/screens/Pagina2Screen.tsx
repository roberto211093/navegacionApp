import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

const Pagina2Screen = () => {
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Regresar',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 2</Text>
      <Button
        title="page 3"
        onPress={() => {
          nav.navigate('Pagina3Screen');
        }}
      />
      <Button
        title="regresar"
        onPress={() => {
          nav.goBack();
        }}
      />
    </View>
  );
};

export default Pagina2Screen;
