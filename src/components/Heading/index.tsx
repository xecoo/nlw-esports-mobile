import { View, Text } from 'react-native';
import { Props } from './iHeading';

import { styles } from './styles';

export function Heading({title, subtitle, ...rest}: Props) {
  return (
    <View style={styles.container} {...rest}>

    </View>
  );
}