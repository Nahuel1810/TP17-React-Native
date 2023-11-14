import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import Button from '../components/Button';
import fondo from '../assets/1.jpg'
const Create = ({ ip }) => {
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

  const handleCreate = async () => {
    const camposObligatorios = [
      name, pos, years, height, weight, nationality,
      ap, sub, ata, ga, assists, fc, fs, ta, tr
    ];

    if (camposObligatorios.some(campo => !campo)) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Lógica para enviar datos a tu API
    const nuevoJugador = {
      name: name,
      POS: pos,
      years: years,
      height: height,
      weight: weight,
      nationality: nationality,
      Ap: ap,
      SUB: sub,
      ATA: ata,
      GA: ga,
      assists: assists,
      FC: fc,
      FS: fs,
      TA: ta,
      TR: tr,
    };

    // Realiza la solicitud HTTP para enviar los datos
    try {
      const response = await fetch(`http://${ip}:3000/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoJugador),
      });

      if (response.status === 201) {
        // Datos creados exitosamente
        console.log('Jugador creado con éxito');
        // Muestra el modal de éxito
        Alert.alert('Éxito', 'Jugador creado con éxito');
        // Puedes realizar alguna acción adicional si es necesario
      } else {
        console.error('Error al crear jugador:', response.status);
        // Muestra un modal de error si la creación falla
        Alert.alert('Error', 'No se pudo crear el jugador. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al crear jugador:', error);
      // Muestra un modal de error si hay un error en la solicitud HTTP
      Alert.alert('Error', 'Hubo un error al crear el jugador. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <ImageBackground source={fondo}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '93%', marginTop: 50 }}>
        <View style={styles.card}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Agregar jugador</Text>
            <TextInput
              style={styles.input}
              placeholder="name"
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
              placeholder="years"
              value={years}
              onChangeText={(text) => setYears(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="height"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="weight"
              value={weight}
              onChangeText={(text) => setWeight(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="nationality"
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
              placeholder="assistsstencias"
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
            <Button title="Agregar Jugador" onPress={handleCreate} color={'#00C852'} />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    width: 250
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#333'
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
    paddingBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 20,
  },
});

export default Create;
