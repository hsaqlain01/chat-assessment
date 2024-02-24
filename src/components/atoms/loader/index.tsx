import { ActivityIndicator } from 'react-native';
import React from 'react';

import { theme } from '../../../config/theme';

const Loader = ({ loading }: { loading: boolean }) => {
  return loading ? (
    <ActivityIndicator size='large' color={theme.color.blue.original} />
  ) : (
    <></>
  );
};

export default Loader;
