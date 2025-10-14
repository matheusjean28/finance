import { useAppContext } from '@/app/context/useAppContext';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import UpcommingBills from './UpcommingBills';

export default function Popup() {
  const { screen, setScreen, setPopUpStatus } = useAppContext();

  return (
    <Modal visible={!!screen} transparent animationType="fade">
      <View style={styles.container}>
        <UpcommingBills howCall='popup' />
        <Text onPress={() => { setScreen(null), setPopUpStatus(false) }}>Fechar</Text>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    width: '100%',
    backgroundColor:"red",
    height: "90%"
  },

})