import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {RootStackParams} from '../navigation/StackNavigation';

//interface RouterParams {
//  id: number;
//  name: string;
//}
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({navigation, route}: Props) => {
  console.log(JSON.stringify(navigation, null, 3));
  //const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
