import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Container, ProgressIndicator} from './styles';

interface ProgressBarProps {
  percentage?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({percentage = 0}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const percentageValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (width !== 0 && percentage === 0) percentageValue.setValue(-width);
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentageValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    percentageValue.setValue(percentage);
  }, [percentage]);

  return (
    <Container
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width);
      }}>
      <ProgressIndicator
        style={{
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [-width, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      />
    </Container>
  );
};
