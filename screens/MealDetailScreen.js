import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const CustomHeaderButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.headerButton}>
    <Ionicons name="ios-star" size={24} color="white" />
  </TouchableOpacity>
);

const MealDetailScreen = props => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButton
          onPress={() => {
            console.log('Thêm vào danh sách yêu thích');
          }}
        />
      ),
    });
  }, [props.navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}Phút</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Nguyên liệu</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Cách nấu</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  headerButton: {
    marginRight: 10
  }
});

export default MealDetailScreen;