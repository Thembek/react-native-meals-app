import { Text } from 'react-native';

function MealDetailScreen({ route }){
    const mealId = route.params.mealId;
    
    return(
        <Text>MEals Detail Screen ({mealId})</Text>
    )
}

export default MealDetailScreen;