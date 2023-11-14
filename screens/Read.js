import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import Button from '../components/Button';
import fondo from '../assets/1.jpg'
const Read = ({ ip }) => {
  const [players, setPlayers] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://${ip}:3000/${endpoint}`);
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    fetchData('read');
  }, []);

  const showAllPlayers = () => {
    fetchData('read');
  };

  const showArgentinianPlayers = () => {
    fetchData('read/argentina');
  };

  const showWeightFilterPlayers = () => {
    fetchData('read/weight');
  };

  const showTallestPlayer = () => {
    fetchData('read/tallest');
  };
  return (
    <ImageBackground source={fondo}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <ScrollView horizontal style={styles.table}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.BigCellHeader}>Nombre</Text>
              <Text style={styles.SmallCellHeader}>POS</Text>
              <Text style={styles.SmallCellHeader}>Edad</Text>
              <Text style={styles.BigCellHeader}>Estatura</Text>
              <Text style={styles.SmallCellHeader}>Peso</Text>
              <Text style={styles.BigCellHeader}>Nacionalidad</Text>
              <Text style={styles.SmallCellHeader}>Ap</Text>
              <Text style={styles.SmallCellHeader}>SUB</Text>
              <Text style={styles.SmallCellHeader}>ATA</Text>
              <Text style={styles.SmallCellHeader}>GA</Text>
              <Text style={styles.SmallCellHeader}>ASI</Text>
              <Text style={styles.SmallCellHeader}>FC</Text>
              <Text style={styles.SmallCellHeader}>FS</Text>
              <Text style={styles.SmallCellHeader}>TA</Text>
              <Text style={styles.SmallCellHeader}>TR</Text>
            </View>

            <FlatList
              data={players}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.BigCell}>{item.Nombre}</Text>
                  <Text style={styles.SmallCell}>{item.POS}</Text>
                  <Text style={styles.SmallCell}>{item.Edad}</Text>
                  <Text style={styles.BigCell}>{item.Estatura}</Text>
                  <Text style={styles.SmallCell}>{item.Peso}</Text>
                  <Text style={styles.BigCell}>{item.Nacionalidad}</Text>
                  <Text style={styles.SmallCell}>{item.Ap}</Text>
                  <Text style={styles.SmallCell}>{item.SUB}</Text>
                  <Text style={styles.SmallCell}>{item.ATA}</Text>
                  <Text style={styles.SmallCell}>{item.GA}</Text>
                  <Text style={styles.SmallCell}>{item.ASI}</Text>
                  <Text style={styles.SmallCell}>{item.FC}</Text>
                  <Text style={styles.SmallCell}>{item.FS}</Text>
                  <Text style={styles.SmallCell}>{item.TA}</Text>
                  <Text style={styles.SmallCell}>{item.TR}</Text>
                </View>
              )}
            />

          </View>
        </ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Opciones:</Text>
          <Button title="Mostrar todo" onPress={showAllPlayers} color={'#00C852'} />
          <Button title="players Argentinos" onPress={showArgentinianPlayers} color={'#00C852'} />
          <Button title="players entre 75 y 80 kg" onPress={showWeightFilterPlayers} color={'#00C852'} />
          <Button title="Jugador más alto" onPress={showTallestPlayer} color={'#00C852'} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  table: {
    maxHeight: '35%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  BigCellHeader: {
    width: 100,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#333',
    backgroundColor: '#00C852',
  },
  SmallCellHeader: {
    width: 40,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#333',
    backgroundColor: '#00C852',
  },
  BigCell: {
    width: 100,
  },
  SmallCell: {
    width: 40,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 30
  },
  cardTitle: {
    marginBottom: 20,
    color: '#393939',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default Read;
