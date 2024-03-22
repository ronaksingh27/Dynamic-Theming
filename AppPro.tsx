import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Appearance,
  ColorSchemeName,
} from 'react-native';

function AppPro(): JSX.Element {
    const  colorScheme : ColorSchemeName = Appearance.getColorScheme();
    console.log(colorScheme);
  const isDarkMode = colorScheme === 'dark';
  return (

      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello!!
        </Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  whiteText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  darkText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AppPro;
