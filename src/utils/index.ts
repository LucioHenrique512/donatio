export const maskedInputPatterns = {
    phoneNumber: [
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  };
  
  export const removeCharacters = (string: string) => {
    var numsStr = string.replace(/[^0-9]/g, "");
    return numsStr;
  };