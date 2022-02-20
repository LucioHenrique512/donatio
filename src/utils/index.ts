import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Toast, {ToastShowParams} from 'react-native-toast-message';

export const maskedInputPatterns = {
  phoneNumber: '+55 ([00]) [00000] [0000]',
};

export const removeCharacters = (string: string) => {
  var numsStr = string.replace(/[^0-9]/g, '');
  return numsStr;
};

export const showToast = (params: ToastShowParams) => {
  Toast.show({
    ...params,
    topOffset: Platform.OS === 'ios' ? RFPercentage(15) : RFPercentage(10),
  });
};
