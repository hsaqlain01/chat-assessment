import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import { styles } from './styles';
import Avatar from '../../atoms/avatar';

const Header = ({ centerTitle, title, header }: IHeader) => {
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();
  return (
    <>
      <View style={[styles.headerContainer, header && styles.boxShadow]}>
        <View
          style={[
            styles.container,
            {
              justifyContent: centerTitle ? 'center' : 'flex-start',
            },
          ]}
        >
          {title ? (
            <>
              <Avatar title={title?.split('')?.[0]} />

              <Text style={styles.title}>{title}</Text>
            </>
          ) : null}
          {centerTitle ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.centerTitle}>{centerTitle}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default Header;
