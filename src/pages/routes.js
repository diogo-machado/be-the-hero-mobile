import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

import Incidents from './Incidents/index';
import Detail from './Detail/index';

function Routes() {
  return (
    <NavigationContainer>
      <appStack.Navigator screenOptions={{ headerShown: false }}>
        <appStack.Screen name="Incidents" component={Incidents} />
        <appStack.Screen name="Detail" component={Detail} />
      </appStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;