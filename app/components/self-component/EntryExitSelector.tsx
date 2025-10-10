import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


type Props = {
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EntryExitSelector({ selected, setSelected }: Props) {
    const [] = useState<'entrada' | 'saida' | null>(null);

    return (
        <View style={styles.container}>
            {/* Saída */}
            <Pressable
                style={[
                    styles.option,
                    { backgroundColor: selected === 'saida' ? '#ffffffff' : '#fddede' },
                ]}
                onPress={() => { setSelected('saida'), console.log('voce clicou em saida') }}
            >
                <MaterialIcons name="arrow-downward" size={20} color="#000" />
                <Text style={styles.text}>saída</Text>
            </Pressable>

            {/* Entrada */}
            <Pressable
                style={[
                    styles.option,
                    { backgroundColor: selected === 'entrada' ? '#ffffffff' : '#d9fcd9' },
                ]}
                onPress={() => { setSelected('entrada'), console.log('voce clicou em entrada') }}
            >
                <MaterialIcons name="arrow-upward" size={20} color="#000" />
                <Text style={styles.text}>entrada</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderRadius: 12,
        padding: 4,
    },
    option: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 3,
        gap: 5
    },
    text: {
        fontWeight: '500',
        marginTop: 2,
    },
});
