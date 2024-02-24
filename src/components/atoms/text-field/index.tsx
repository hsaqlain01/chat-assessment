import { TextInput, View } from 'react-native';

import { styles } from './styles';

const TextField = ({ onChange, value }: ITextField) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Type a Message...'
        style={styles.inputField}
        multiline
        autoFocus
        onChangeText={onChange}
        value={value}
        numberOfLines={3}
      />
    </View>
  );
};

export default TextField;
