import React, {createContext, useReducer} from 'react';
import AuthReducer from '../authReducer';

// Definir cómo luce, que informacion tendré aquí
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  updateFavoriteIcon: (iconName: string) => void;
  updateUserName: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'SIGN_IN'});
  };

  const signOut = () => {
    dispatch({type: 'SIGN_OUT'});
  };

  const updateUserName = (iconName: string) => {
    dispatch({type: 'CHANGE_USER_NAME', payload: iconName});
  };

  const updateFavoriteIcon = (userName: string) => {
    dispatch({type: 'CHANGE_FAV_ICON', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        updateUserName,
        updateFavoriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
