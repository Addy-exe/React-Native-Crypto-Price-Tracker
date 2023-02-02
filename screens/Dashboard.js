import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import CoinCarousel from '../components/CoinCarousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import CoinTable from '../components/CoinTable';
import theme from '../theme/theme';

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
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
      <CoinCarousel />
      <CoinTable />
    </View>
  )
}

const styles = StyleSheet.create({
  dashboard: {
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

export default Dashboard