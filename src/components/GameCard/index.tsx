import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './iProps';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={data.cover}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          
          <Text style={styles.name}>
            {data.name}
          </Text>

          <Text style={styles.ads}>
            {data.ads} anúncios
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}