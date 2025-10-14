import { useAppContext } from '@/app/context/useAppContext';
import React from 'react';
import { Modal, Text, View } from 'react-native';

export default function Popup() {
  const { screen, setScreen,setPopUpStatus } = useAppContext();

  return (
    <Modal visible={!!screen} transparent animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
          <Text>Tela atual: {screen}</Text>
          <Text onPress={() => {setScreen(null), setPopUpStatus(false)}}>Fechar</Text>
        </View>
      </View>
    </Modal>
  );
}
