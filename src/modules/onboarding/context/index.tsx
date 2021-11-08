import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {UserType, UserTypes} from '../../../types/userType';

type OnboardingContextType = {
  userPayload?: UserType;
  setUserPayload: Dispatch<SetStateAction<UserType>>;
  setUserType: (type: UserTypes) => void;
};

const OnboardingContext = createContext({} as OnboardingContextType);

export const OnboardingContextProvider: React.FC = ({children}) => {
  const [userPayload, setUserPayload] = useState<UserType>({} as UserType);

  const setUserType = (type: UserTypes) => {
    setUserPayload({...userPayload, type});
  };

  return (
    <OnboardingContext.Provider
      value={{
        userPayload,
        setUserPayload,
        setUserType,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  return useContext(OnboardingContext);
};
