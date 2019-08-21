import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import colors from '../../../../Constants/colors';
import { ScrollView } from "react-native-gesture-handler";

const MoviePhotos = props => {

  return (
    <View>
      <Text style={styles.heading}>PHOTOS</Text>
      {
        props.movie.images &&
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {
          props.movie.images.map(image => {
            return (
              <View style={styles.imageShadow} key={image.file_path}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{uri: 'https://image.tmdb.org/t/p/w500' + image.file_path}} 
                  />
                </View>
            </View>
            );
          })
        }
        </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  scrollView: {
    paddingLeft: 5,
    paddingRight: 20
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginVertical: 10,
    marginLeft: 15,
    height: 160,
    width: 260,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  }
});

export default MoviePhotos;
