import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores, globalStyles} from '../theme/appTheme';
import {AuthContext} from '../context/authContext/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const {authState, signIn, signOut} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text style={globalStyles.title}>SettingsScreen</Text>
      <Text style={globalStyles.title}>
        {JSON.stringify(authState, null, 3)}
      </Text>

      <Button
        title={authState.isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        onPress={() => (authState.isLoggedIn ? signOut() : signIn())}
      />
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={50} color={colores.primary} />
      )}
    </View>
  );
};

export default SettingsScreen;
