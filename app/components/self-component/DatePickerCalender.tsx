

import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

type Props = {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DatePickerCalender({ date, setDate }: Props) {
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate?: Date) => {
        setShow(Platform.OS === 'ios'); //ios
        if (selectedDate) setDate(selectedDate);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Data selecionada:</Text>
            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>

            <Button title="Escolher data" onPress={() => setShow(true)} />

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 16,
        marginBottom: 10,
    },
});