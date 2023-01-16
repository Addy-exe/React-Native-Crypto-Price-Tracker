import axios from 'axios';
import { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { TrendingCoins } from '../api/Api';
import Icon from 'react-native-vector-icons/AntDesign';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const CoinCarousel = () => {

  const [coins, setCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins("INR"));
    setCoins(data);
  }


  useEffect(() => {
    fetchTrendingCoins();
  }, [])



  return (
    <View>
      <Carousel
        layout={'default'}
        data={coins}
        horizontal
        loop={true}
        autoplay={true}
        autoplayDelay={2000}
        sliderWidth={width}
        itemWidth={140}
        renderItem={({ item }) => {
          let profit = item.price_change_percentage_24h >= 0;

          return (

            <TouchableOpacity style={styles.singleItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.imageStyle}
              />
              <Text style={styles.coinTitle}>{item.symbol}</Text>
              <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                {profit ? <Icon name='caretup' size={14} color={'#0ECB81'}/> :
                  <Icon name='caretdown' size={14} color={'red'}/>
                }
                <Text 
                  style={{ fontSize: 14, marginLeft: 5}}>
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Text>
              </View>
            </TouchableOpacity>

          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  singleItem: {
    marginTop: 26,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 120,
  },
  imageStyle: {
    width: 80,
    height: 80
  },
  coinTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  }
})

export default CoinCarousel