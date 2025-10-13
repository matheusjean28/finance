import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DatePickerCalender from './DatePickerCalender';

type Props = {
  label: string;
  typeofInput: string;
  iconName?: string | 'text';
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function CardInput({ label, typeofInput }: Props) {
  const [option, setOption] = useState<string | undefined>(undefined);
  const [selected, setSelected] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());

  console.log('Data alterada em outro component:', date);
  console.log('Selected alterado em CardInput:', selected);

  return (
    <View style={styles.cardContainer}>
      {/* Input numérico simples */}
      <Text style={styles.label}>Valor</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons style={styles.iconStyle} size={24} name="download-for-offline" />
        <TextInput style={styles.textInputPlaceholder} placeholder="0.0" textAlign="left" keyboardType="numeric" />
      </View>

      {/* Seletor (Picker) */}
      <Text style={styles.label}>Categoria</Text>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={option}
          onValueChange={(itemValue) => setOption(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      {/* Área de texto */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.textAreaInput}
        placeholder="Adicione uma breve descrição sobre o movimento"
        multiline
        numberOfLines={3}
        value={description}
        onChangeText={setDescription}
      />

      {/* Seletor de data */}
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { justifyContent: 'space-between' }]}>
        <MaterialIcons style={styles.iconStyle} size={24} name="event" />
        <DatePickerCalender date={date} setDate={setDate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    gap: 12,
  },
  label: {
    padding: 5,
    fontWeight: '500',
  },
  inputContainer: {
    padding: 5,
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
  picker: {
    width: '100%',
    height: 50,
  },
  textAreaInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});
