import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import Button from '../components/Button';
import { Picker } from '@react-native-picker/picker';
import fondo from '../assets/1.jpg'

const Update = ({ ip }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [name, setName] = useState('');
  const [pos, setPos] = useState('');
  const [years, setYears] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [nationality, setNationality] = useState('');
  const [assists, setAssists] = useState('');
  const [ap, setAp] = useState('');
  const [sub, setSub] = useState('');
  const [ata, setAta] = useState('');
  const [ga, setGa] = useState('');
  const [fc, setFc] = useState('');
  const [fs, setFs] = useState('');
  const [ta, setTa] = useState('');
  const [tr, setTr] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}:3000/read`);
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error al obtener players:', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    if (!selectedPlayer) {
      Alert.alert('Error', 'Por favor, selecciona un jugador');
      return;
    }

    const updatedPlayer = {
      Nombre: name,
      POS: pos,
      Edad: years,
      Estatura: height,
      Peso: weight,
      Nacionalidad: nationality,
      Ap: ap,
      SUB: sub,
      ATA: ata,
      GA: ga,
      ASI: assists,
      FC: fc,
      FS: fs,
      TA: ta,
      TR: tr,
    };

    try {
      const response = await fetch(`http://${ip}:3000/update/${selectedPlayer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPlayer),
      });

      if (response.status === 204) {
        console.log('Jugador actualizado con éxito');
        Alert.alert('Éxito', 'Jugador actualizado con éxito');
      } else {
        console.error('Error al actualizar jugador:', response.status);
        Alert.alert('Error', 'No se pudo actualizar el jugador. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al actualizar jugador:', error);
      Alert.alert('Error', 'Hubo un error al actualizar el jugador. Por favor, inténtalo de nuevo.');
    }
  };

  const defaultPlayer = {
    Nombre: '',
    POS: '',
    Edad: '',
    Estatura: '',
    Peso: '',
    Nacionalidad: '',
    Ap: '',
    SUB: '',
    ATA: '',
    GA: '',
    ASI: '',
    FC: '',
    FS: '',
    TA: '',
    TR: '',
  }
  return (
    <ImageBackground source={fondo}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '93%', marginTop: 50 }}>
        <View style={styles.card}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.pickerContainer}>
              <Picker
                style={{ color: '#888', backgroundColor: '#f0f0f0' }}
                selectedValue={selectedPlayer}
                onValueChange={(itemValue) => {
                  setSelectedPlayer(itemValue);
                  setName(itemValue.Nombre);
                  setPos(itemValue.POS);
                  setYears(itemValue.Edad.toString());
                  setHeight(itemValue.Estatura.toString());
                  setWeight(itemValue.Peso.toString());
                  setNationality(itemValue.Nacionalidad);
                  setAp(itemValue.Ap.toString());
                  setSub(itemValue.SUB.toString());
                  setAta(itemValue.ATA.toString());
                  setGa(itemValue.GA.toString());
                  setAssists(itemValue.ASI.toString());
                  setFc(itemValue.FC.toString());
                  setFs(itemValue.FS.toString());
                  setTa(itemValue.TA.toString());
                  setTr(itemValue.TR.toString());
                }}>
                <Picker.Item label="Seleccione un jugador" value={defaultPlayer} />
                {players.map((jugador) => (
                  <Picker.Item key={jugador.id} label={jugador.Nombre} value={jugador} />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Posicion"
              value={pos}
              onChangeText={(text) => setPos(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              value={years}
              onChangeText={(text) => setYears(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Estatura"
              value={height}
              onChangeText={(text) => setHeight(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Peso"
              value={weight}
              onChangeText={(text) => setWeight(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Nacionalidad"
              value={nationality}
              onChangeText={(text) => setNationality(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Apariciones como titular"
              value={ap}
              onChangeText={(text) => setAp(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Apariciones como suplente"
              value={sub}
              onChangeText={(text) => setSub(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Atajadas"
              value={ata}
              onChangeText={(text) => setAta(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Goles a favor"
              value={ga}
              onChangeText={(text) => setGa(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Asistencias"
              value={assists}
              onChangeText={(text) => setAssists(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Faltas cometidas"
              value={fc}
              onChangeText={(text) => setFc(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Faltas sufridas"
              value={fs}
              onChangeText={(text) => setFs(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Tarjetas amarillas"
              value={ta}
              onChangeText={(text) => setTa(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Tarjetas rojas"
              value={tr}
              onChangeText={(text) => setTr(text)}
              keyboardType="numeric"
            />
            <Button title="Enviar" onPress={handleUpdate} color={'#00C852'} />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    width: 270,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#A0A0A0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 20
  },
});

export default Update;
