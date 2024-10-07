import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData){
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

function CategoriesScreen(){
    return(
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;