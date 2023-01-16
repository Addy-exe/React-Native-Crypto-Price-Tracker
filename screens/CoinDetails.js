import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SingleCoin } from '../api/Api';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';


const CoinDetails = () => {

  const [coin, setCoin] = useState([])

  // to get data passed from useNavigation
  const route = useRoute()
  const { params: { coinId } } = route


  useEffect(() => {
    const getSingleCoinInfo = async () => {
      const { data } = await axios.get(SingleCoin(coinId));
    }
    getSingleCoinInfo();
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ margin: 10 }}>
        <Icon name='left' size={32} />
      </TouchableOpacity>
      <View style={styles.coinInfo}>
        <Text style={styles.textStyle}>{coinId}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coinInfo: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 18
  },
  textStyle: {
    fontSize: 22,
  }
})

export default CoinDetails