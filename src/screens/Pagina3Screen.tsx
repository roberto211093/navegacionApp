import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';
import {globalStyles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 3</Text>
      <Button
        title="regresar"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="ir al home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Pagina3Screen;

