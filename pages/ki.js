// @generated: @expo/next-adapter@4.0.10
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+Next.js 👋</Text>
      <Link href="./">
          <a>Also goes</a>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
