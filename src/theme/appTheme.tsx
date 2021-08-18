import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btnBigTxt: {
    color: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  opcionesMenu: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  opcionesMenuTxt: {
    fontSize: 20,
    marginHorizontal: 5,
  },
});
