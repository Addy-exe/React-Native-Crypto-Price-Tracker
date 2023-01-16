import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { DataTable } from 'react-native-paper'
import { useState, useEffect } from 'react'
import { CoinList } from '../api/Api'
import numberWithCommas from './NumberWithComma'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const CoinTable = () => {

  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState([]);

  const navigation = useNavigation()

  useEffect(() => {
    getAllCoins();
  }, [])

  const getAllCoins = async () => {
    const { data } = await axios.get(CoinList("INR"))
    setCoins(data)
  }

  const handleSearch = () => {
    console.log("handleSearch",searchText)
    return coins.filter((coin) => 
      coin.name.includes(searchText.toLowerCase()) || 
      coin.symbol.includes(searchText.toLowerCase())
    )
  }

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Enter to search Crypto"
        style={styles.searchBar}
        autoCorrect={false}
        onChangeText={(text) => {
          setSearchText(text)
        }}
        autoFocus
      />
      <DataTable style={styles.tableContainer}>

        <DataTable.Header style={styles.tableHead}>
          <Text style={styles.headText}>Name</Text>
          <Text style={styles.headText}>Price</Text>
          <Text style={styles.headText}>Market-Cap</Text>
        </DataTable.Header>

        <ScrollView>
          {handleSearch().map((c) => (

            <TouchableOpacity key={c.id} onPress={() => navigation.navigate("CoinDetails", {coinId: c.id})}>

              <DataTable.Row style={styles.tableCell}>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Image
                      source={{ uri: c.image }}
                      style={styles.imageStyle}
                    />
                    <Text style={{...styles.cellText,marginLeft: 12}}>{c.symbol}</Text>
                </View>
                <Text style={{ ...styles.cellText, flex: 1}}>
                  {`₹`} {numberWithCommas(c.current_price.toFixed(0))}
                </Text>
                <Text style={{ ...styles.cellText, flex: 1 }}>
                  {`₹`} {numberWithCommas(c.market_cap.toString().slice(0, -6))} M
                </Text>
              </DataTable.Row>

            </TouchableOpacity>

          ))}
        </ScrollView>

      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    alignItems: "center"
  },
  searchBar: {
    width: "95%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  tableContainer: {
    marginTop: 10,
    width: "95%"
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginTop: 6
  },
  tableHead: {
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  tableCell: {
    height: 72,
  },
  headText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16
  },
  cellText: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '500'
  }
})

export default CoinTable