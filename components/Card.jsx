import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ title, children }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        backgroundColor: '#E7E7E7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 30,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardTitle: {
        marginBottom: 20,
        fontFamily: 'Kanit_700Bold',
        color: '#393939',
        fontSize: 20
    },
});
