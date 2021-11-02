export const maskedInputPatterns = {
    phoneNumber: '+55 ([00]) [00000] [0000]',
  };
  
  export const removeCharacters = (string: string) => {
    var numsStr = string.replace(/[^0-9]/g, "");
    return numsStr;
  };