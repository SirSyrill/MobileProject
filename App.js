import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header/Header';
import StaffMember from './components/staffMember/StaffMember';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StaffMember />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'none',
    padding: 'none'
  },
});
