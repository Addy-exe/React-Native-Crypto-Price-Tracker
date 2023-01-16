import { View, Text, StyleSheet} from 'react-native';
import CoinCarousel from '../components/CoinCarousel';
import CoinTable from '../components/CoinTable';

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <CoinCarousel/>
      <CoinTable/>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboard:{
    flex: 1,
  }
})

export default Dashboard