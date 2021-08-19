import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MenuLateral from './src/navigation/MenuLateral';
import AuthProvider from './src/context/authContext';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
