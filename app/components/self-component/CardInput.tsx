import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



type Props = {
    label: string;
    typeofInput: string;
    iconName?: string | 'text'
}


export default function CardInput({ label, typeofInput
}: Props) {

    var possibleTypeofInput = ['select', 'number', 'text', 'date', 'option']

    return (
        <View style={styles.cardContainer}>
            <Text>Value</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons style={styles.iconStyle} size={24} name={'download-for-offline'} />
                <TextInput style={styles.textInputPlaceholder} placeholder='0.0' textAlign='left' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        flexDirection: 'column',
    },
   inputContainer: {
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#c6b0b0ff',
    borderWidth: 1,
  },
  iconStyle: {
    marginRight: 10,
  },
  textInputPlaceholder: {
    flex: 1,           
    padding: 5,
    textAlign: 'left',
  },
})