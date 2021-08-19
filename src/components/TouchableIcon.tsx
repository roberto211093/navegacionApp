import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colores} from '../theme/appTheme';
import {AuthContext} from '../context/authContext/AuthContext';

interface Props {
  name: string;
}

const TouchableIcon = ({name}: Props) => {
  const {updateFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => updateFavoriteIcon(name)}>
      <Text>
        <Icon name={name} size={50} color={colores.primary} />
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
