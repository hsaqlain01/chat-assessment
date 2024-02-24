import { NavigationContainer } from '@react-navigation/native';

import { Stack, navigationRef } from '../utilities/navigation';
import Conversation from '../modules/chat';

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName='Conversation'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Conversation' component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
