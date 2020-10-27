//import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
//import firebase, { ReactNativeFirebase } from '@react-native-firebase/app';
import firebase from 'firebase';


export const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
    type: USER_LOGIN,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});


  
export const fazerLogin = (userName, password, dispatch) => {
    return firebase
      .auth() 
      .signInWithEmailAndPassword(userName, password)
      .then(resultado => {
        const action = userLogin(resultado.user.email);
        dispatch(action);
        return resultado.user.email
      })

      .catch(error => {
        if(error.code == 'auth/user-not-found'){
          return new Promise((resolve, reject) => {
            Alert.alert(
              'Usuário não encontrado',
              'Deseja criar um novo usuário?',
              [
                {
                  text: 'Não',
                  onPress: () => {}
                },
                {
                  text: 'Sim',
                  onPress: () => {
                    firebase.auth()
                      .createUserWithEmailAndPassword(userName, password)
                      .then(resolve)
                      .catch(reject)
                  }
                }
              ]
            );
          })
          
        }
        return Promise.reject(error);
      })
};

function getMessageByError(code){
    switch (code){
      case 'auth/invalid-email':
        return 'Usuário inválido.';
      case 'auth/wrong-password':
        return 'Senha inválida.';
      default:
        return 'Erro desconhecido.';
    }
  }