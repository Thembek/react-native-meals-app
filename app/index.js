import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';

const Home = () => {
    return(
        <>
            <StatusBar style='light'/>
            <CategoriesScreen />
        </>
        
    )
}

export default Home;

const styles = StyleSheet.create({})