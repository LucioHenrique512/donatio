import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firestoreCollections} from '../../../services/firebase';
import {UserType} from '../../../types/userType';

export const persistUser = async (uid: string, userData: any) => {
  return await firestore()
    .collection(firestoreCollections.user)
    .doc(uid)
    .set(userData);
};

export const createUser = async (
  user: UserType,
  onError: (error: any) => void,
  onSuccess: (userId: string) => void,
) => {
  try {
    const authResponse = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    const userId = authResponse.user.uid;
    const userToPersist = {...user, password: null};
    await persistUser(userId, userToPersist);
    onSuccess(userId);
  } catch (error) {
    onError(error);
  }
};

export const updateUser = async (uid: string, key: string, data: string) => {
  return firestore()
    .collection(firestoreCollections.user)
    .doc(uid)
    .update({[key]: data});
};
