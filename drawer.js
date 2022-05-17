import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StoryAda from './adastory';
import ImageAda from './adawong';
import Home from './home';
import AdaBio from './adabio';



const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
    <Drawer.Navigator>
       {/*  <Drawer.Screen name="Home"
            component={Home} /> */}
            <Drawer.Screen name="Accueil"
                component={Home}
            
            />
        <Drawer.Screen name="ImageAda"
                component={ImageAda}
            
            />
            <Drawer.Screen name="StoryAda"
                component={StoryAda}
            
            />
            <Drawer.Screen name="AdaBio"
                component={AdaBio}
            
            />

    </Drawer.Navigator>)
}

export default DrawerNav;