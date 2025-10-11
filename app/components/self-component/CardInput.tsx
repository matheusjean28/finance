import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePickerCalender from './DatePickerCalender';


type Props = {
    label: 'type' | string;
    typeofInput: string;
    iconName?: string | 'text';
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}


export default function CardInput({ label, typeofInput
}: Props) {
    const [option, setOption] = useState<string | undefined>(undefined);
    const [selected, setSelected] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());

    var possibleTypeofInput = ['select', 'number', 'text', 'date', 'option']
    console.log('o component foi alterado em cardinput', selected)

    const changeStateInput = () => {
    }

    //    <View style={styles.cardContainer}>
    //         <Text style={{padding:10}}>Value</Text>
    //         <View style={styles.inputContainer}>
    //             <MaterialIcons style={styles.iconStyle} size={24} name={'download-for-offline'} />
    //             <TextInput style={styles.textInputPlaceholder} placeholder='0.0' textAlign='left' />
    //         </View>
    //     </View>


    // dragdrop
    // <Text style={{ padding: 10 }}>Value</Text>
    //             <View style={styles.inputContainer}>
    //                 <View style={{ flex: 1 }}>
    //                     <Picker
    //                         selectedValue={option}
    //                         onValueChange={(itemValue) => setOption(itemValue)}
    //                         style={styles.picker}
    //                     >
    //                         <Picker.Item label="Java" value="java" />
    //                         <Picker.Item label="JavaScript" value="js" />
    //                     </Picker>
    //                 </View>
    //             </View>

    //code to entry and exit mony
    {/* <EntryExitSelector selected={selected} setSelected={setSelected} /> */ }

    //code to display text area
    //  <TextInput
    //             style={styles.texAreaInput}
    //             placeholder="Adicione uma breve descrição sobre o movimento"
    //             multiline // permite várias linhas
    //             numberOfLines={3} // altura inicial em linhas
    //             value={description}
    //             onChangeText={(text) => setDescription(text)} // ou salvar no estado
    //         />


    return (
        <View style={styles.cardContainer}>
            <Text style={{ padding: 10 }}>{label}</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons style={styles.iconStyle} size={24} name={'download-for-offline'} />
                <DatePickerCalender date={date} setDate={setDate} />
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
        height: 50
    },
    texAreaInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 5,
        textAlignVertical: 'top'
    }
})