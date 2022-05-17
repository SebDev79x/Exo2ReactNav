import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNav from './drawer';


const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Super Menu"
                component={DrawerNav}
            />
           
        </Stack.Navigator>
        

        
    )
}

export default StackNav;