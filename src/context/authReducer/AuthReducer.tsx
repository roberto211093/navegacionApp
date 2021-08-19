//Funcion pura
import {AuthState} from '../authContext/AuthContext';

type AuthActions =
  | {type: 'SIGN_IN'}
  | {type: 'SIGN_OUT'}
  | {type: 'CHANGE_USER_NAME'; payload: string}
  | {type: 'CHANGE_FAV_ICON'; payload: string};

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
      };

    case 'CHANGE_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };

    case 'CHANGE_FAV_ICON':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };

    default:
      return state;
  }
};

export default AuthReducer;
