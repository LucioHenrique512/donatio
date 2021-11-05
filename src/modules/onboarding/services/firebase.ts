import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UserType} from '../../../types/userType';

export const persistUser = async (uid: string, userData: any) => {
  return await firestore().collection('user').doc(uid).set(userData);
};

export const createUser = async (
  user: UserType,
  onError: (error: any) => void,
  onSuccess: () => void,
) => {
  try {
    const authResponse = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    const userId = authResponse.user.uid;
    const userToPersist = {...user, password: null};
    await persistUser(userId, userToPersist);
    onSuccess()
  } catch (error) {
    onError(error);
  }
};
