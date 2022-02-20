import React, {useRef, createContext, useContext, useState} from 'react';
import {Animated, Easing, Modal, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components';
import {
  OverlayContainer,
  IconContainer,
  MainText,
  SecondaryText,
} from './style';

type ModalPayload = {
  mainText?: string;
  secondaryText?: string;
  iconName?: string;
  duration?: number;
};

type TransitionOverlayContextType = {
  showOverlay: (payload: ModalPayload) => void;
};

const TransitionOverlayContext = createContext(
  {} as TransitionOverlayContextType,
);

export const TransitionOverlay: React.FC = ({children}) => {
  const {white} = useTheme();
  const [modalPayload, setModalPayload] = useState<ModalPayload | undefined>();
  const rotateIconAnimatedValue = useRef(new Animated.Value(0)).current;

  const animateIcon = (
    animate: boolean,
    delay?: boolean,
    callback?: () => void,
  ) => {
    Animated.timing(rotateIconAnimatedValue, {
      toValue: animate ? 1 : 0,
      useNativeDriver: false,
      duration: 600,
      delay: delay ? 200 : 0,
      easing: Easing.elastic(5),
    }).start(() => {
      callback && callback();
    });
  };

  const showOverlay = (payload: ModalPayload) => {
    setModalPayload(payload);
    animateIcon(true, true);
    setTimeout(() => {
      hideOverlay()
    }, payload.duration || 2000);
  };

  const hideOverlay = () => {
    animateIcon(false, false, () => {
      setModalPayload(undefined);
    });
  };

  return (
    <TransitionOverlayContext.Provider value={{showOverlay}}>
      {children}
      <Modal transparent visible={!!modalPayload} animationType="slide">
        <OverlayContainer>
          <IconContainer
            style={{
              transform: [
                {
                  rotateZ: rotateIconAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['-20deg', '0deg'],
                  }),
                },
              ],
            }}>
            <Icon
              name={`${modalPayload?.iconName}`}
              size={RFPercentage(20)}
              color={white}
            />
          </IconContainer>
          <TouchableOpacity onPress={hideOverlay}>
            <MainText>{modalPayload?.mainText}</MainText>
          </TouchableOpacity>
          <SecondaryText>{modalPayload?.secondaryText}</SecondaryText>
        </OverlayContainer>
      </Modal>
    </TransitionOverlayContext.Provider>
  );
};

export const useTransitionOverlay = () => useContext(TransitionOverlayContext);
