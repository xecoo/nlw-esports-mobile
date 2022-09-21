import { GameCardProps } from "./iGameCardProps";
import { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  data: GameCardProps
}