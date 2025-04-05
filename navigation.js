import React from "react";
import Main from './components/main';
import FullInfo from './components/fullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title: 'Главная',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
                        headerTitleStyle: { fontWeight: 'light' }
                    }
                }
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title: 'Статья'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}