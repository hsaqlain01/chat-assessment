import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/molecules/header';
import ChatOrganism from '../../components/organism/chat';
import { userCreators } from '../../redux/actions/user/user.action';
import { styles } from './styles';

const Conversation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCreators.storeUserId());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header centerTitle='Message' header />
      <ChatOrganism />
    </SafeAreaView>
  );
};

export default Conversation;
