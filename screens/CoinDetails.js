import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SingleCoin } from '../api/Api';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';


const CoinDetails = () => {

  const [coindetail, setCoinDetail] = useState([]);

  // to get data passed from useNavigation
  const route = useRoute()
  const { params: { coinId } } = route

  const navigation = useNavigation();

  useEffect(() => {
    const getSingleCoinInfo = async () => {
      const { data } = await axios.get(SingleCoin(coinId));
      setCoinDetail(data)
    }
    getSingleCoinInfo();
  }, [])

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name='ios-caret-back' size={36} />
        </TouchableOpacity>
        <View style={styles.coinInfo}>
          <Text style={styles.textStyle}>{coinId}</Text>
          <View>

          </View>
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
  },
  textStyle: {
    fontSize: 22,
    textTransform: 'uppercase',
    marginLeft: 20
  }
})

export default CoinDetails