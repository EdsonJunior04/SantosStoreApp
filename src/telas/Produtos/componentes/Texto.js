import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  return <Text style={[styles.texto, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 16,
    color: '#000',
  },
});
