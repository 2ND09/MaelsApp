import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'center', // Can be changed to 'flex-end' if you want text at the bottom
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center', // Center the title
    marginTop: 5, // Add some space between image and title
  },
  image: {
    width: '100%',
    height: '70%', // Adjust height as needed
    borderRadius: 10,
    resizeMode: 'cover', // Ensure the image covers the area
  },
});

export default CategoryGridTile;