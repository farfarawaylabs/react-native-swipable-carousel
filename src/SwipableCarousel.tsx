import React, { useState } from 'react';
import { StyleSheet, StyleProp, ViewStyle, Dimensions } from 'react-native';

import Animated, {
  Extrapolate,
  add,
  interpolate,
} from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  diffClamp,
  usePanGestureHandler,
  withDecay,
} from 'react-native-redash';

const { height } = Dimensions.get('window');
const MARGIN = 16;

interface SwipableCarouselProps {
  /** The height of an item in the carousel */
  itemHeight: number;
  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/** 3D style animated carousel */
const SwipableCarousel: React.FC<SwipableCarouselProps> = ({
  itemHeight,
  style,
  children,
  ...rest
}) => {
  const HEIGHT = itemHeight + MARGIN * 2;
  const [containerHeight, setContainerHeight] = useState(height);
  const visibleCards = Math.floor(containerHeight / HEIGHT);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const y = diffClamp(
    withDecay({
      value: translation.y,
      velocity: velocity.y,
      state,
    }),
    -HEIGHT * children.length + visibleCards * HEIGHT,
    0
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { height: h },
          },
        }) => setContainerHeight(h)}
      >
        {children.map((currItem, index) => {
          const positionY = add(y, index * HEIGHT);
          const isDisappearing = -HEIGHT;
          const isTop = 0;
          const isBottom = HEIGHT * (visibleCards - 1);
          const isAppearing = HEIGHT * visibleCards;
          const translateYWithScale = interpolate(positionY, {
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -HEIGHT / 4],
            extrapolate: Extrapolate.CLAMP,
          });
          const translateY = add(
            interpolate(y, {
              inputRange: [-HEIGHT * index, 0],
              outputRange: [-HEIGHT * index, 0],
              extrapolate: Extrapolate.CLAMP,
            }),
            translateYWithScale
          );
          const scale = interpolate(positionY, {
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
            extrapolate: Extrapolate.CLAMP,
          });
          const opacity = interpolate(positionY, {
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0, 1, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              style={[
                styles.item,
                { opacity, transform: [{ translateY }, { scale }] },
              ]}
              key={index}
            >
              {currItem}
            </Animated.View>
          );
        })}
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  item: {
    marginVertical: MARGIN,
  },
});

export default SwipableCarousel;
