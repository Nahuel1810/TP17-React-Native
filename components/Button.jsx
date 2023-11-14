import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, color, disabled, onPress, outline }) {
    const buttonStyles = [
        styles.button,
        { backgroundColor: outline ? 'transparent' : disabled ? '#888888' : color },
    ];

    const textStyles = [
        styles.buttonText,
        { color: outline ? color : '#fff' },
    ];

    const borderStyles = outline
        ? { borderColor: color, borderWidth: 1 }
        : {};

    return (
        <TouchableOpacity
            style={[buttonStyles, borderStyles]}
            onPress={() => {
                if (!disabled) {
                    onPress();
                }
            }}
            disabled={disabled}
        >
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 46,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
