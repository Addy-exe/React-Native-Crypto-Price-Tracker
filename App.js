import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation';
import theme from './theme/theme';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <View style={styles.container}>

          <Appbar.Header>
            <TouchableOpacity style={styles.themelogo}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={34}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Cryptoverse</Text>
              <Text style={styles.subtitle}>Check Battle Between Crypto Curruncy's</Text>
            </View>
          </Appbar.Header>

          <Navigation/>
          
        </View>
      </PaperProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themelogo: {
    marginLeft: 10
  },
  textContainer: {
    alignItems: "center",
    width: "80%"
  },
  title: {
    fontSize: 26,
    color: theme.colors.secondary,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
    letterSpacing: 0.5
  }
})

export default App