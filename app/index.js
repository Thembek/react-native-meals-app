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
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#3f2f25'},
                }}>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{
                        title: 'All Categories',
                    }}/>
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>   
        </>
        
    )
}

export default Home;

const styles = StyleSheet.create({})