import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MealsStack = createStackNavigator();

function MealsNavigator() {
  return (
    <MealsStack.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStack.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Meal Categories' }}
      />
      <MealsStack.Screen 
        name="CategoryMeals" 
        component={CategoryMealsScreen} 
      />
      <MealsStack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
      />
    </MealsStack.Navigator>
  );
}

const FavStack = createStackNavigator();

function FavNavigator() {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{ title: 'Your Favorites' }}
      />
      <FavStack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
      />
    </FavStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust label size
        },
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar background color
          borderTopColor: '#ccc', // Border color
          borderTopWidth: 1,
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavNavigator} />
    </Tab.Navigator>
  );
}
const SettingsStack = createStackNavigator();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={defaultStackNavOptions}>
      <SettingsStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Cài đặt' }}
      />
    </SettingsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={MealsFavTabNavigator} options={{ title: 'Meals' }} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}