import { NativeModules } from 'react-native';

type SwipableCarouselType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SwipableCarousel } = NativeModules;

export default SwipableCarousel as SwipableCarouselType;
