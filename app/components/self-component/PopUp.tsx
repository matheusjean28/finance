import { useAppContext } from '@/app/context/useAppContext';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import UpcommingBills from './UpcommingBills';

export default function Popup() {
  const { screen, setScreen, setPopUpStatus } = useAppContext();

  return (
    <Modal visible={!!screen} transparent={false} animationType="fade">
      <View style={styles.container}>
        <UpcommingBills howCall='popup' />
        <Text style={styles.closemodal} onPress={() => { setScreen(null), setPopUpStatus(false) }}>Fechar</Text>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
     justifyContent: 'center', alignItems: 'center',
    width: '100%',
    height:'100%'
  },
  closemodal: {
    padding: 10,
    backgroundColor: '#007bff',
    fontWeight:'600',
    borderWidth: 1,
    borderRadius: 9,
    width: '90%', textAlign: 'center',
    marginTop: 10
  }
})