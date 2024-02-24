import { Text, View } from 'react-native';

import { heightPercentageToDP } from '../../../utilities/responsive';
import { styles } from './styles';

const Avatar = ({ size, title }: { size?: number; title: string }) => {
  return (
    <View
      style={[
        styles.avatar,
        {
          width: heightPercentageToDP(size || 4.5),
          height: heightPercentageToDP(size || 4.5),
        },
      ]}
    >
      <Text style={styles.avatarTitle}>{title}</Text>
    </View>
  );
};

export default Avatar;
