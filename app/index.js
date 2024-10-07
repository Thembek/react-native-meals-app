import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const Home = () => {
    return(
        <>
            <StatusBar style='light'/>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>   
        </>
        
    )
}

export default Home;

const styles = StyleSheet.create({})