import {ImageSourcePropType} from 'react-native';

type CarProps = {
  name: string;
  tagline: string;
  taglineCTA?: string;
  image: ImageSourcePropType;
};

export default CarProps;
