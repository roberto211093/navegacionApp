import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {colores, globalStyles} from '../theme/appTheme';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
              <Icon name="menu" size={30} color={colores.primary} />
            </Text>
          </TouchableOpacity>
        );
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 1</Text>
      <Button
        title="page 2"
        onPress={() => {
          navigation.navigate('Pagina2Screen');
        }}
      />

      <Text>Navegar con argumentos</Text>

      <View style={globalStyles.flexDirectionRow}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...globalStyles.btnBig,
            backgroundColor: 'blue',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Roberto',
            })
          }>
          <Text style={globalStyles.btnBigTxt}>
            <IconMaterial name="human-male" size={30} color="#fff" />
            Roberto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.btnBig}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Keysla',
            })
          }>
          <Text style={globalStyles.btnBigTxt}>
            <IconMaterial name="human-female" size={30} color="#fff" />
            Keysla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
