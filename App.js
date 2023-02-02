import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation';
import theme from './theme/theme';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App