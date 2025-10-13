import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function CanSpendToday() {
    const canspend = {
        value: 45,  
        limit: 50,  
    };

    const progress = (canspend.value / canspend.limit) * 100;
    const isOverLimit = progress > 100;

    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: Math.min(progress, 100),
            duration: 800,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    return (
        <View style={styles.container}>
            <Text style={styles.primalText}>Disponivel Hoje</Text>
            <Text style={styles.secondText}>R$ {canspend.value}</Text>
            <Text style={styles.remaining}>
                Ainda pode ser gasto durante o dia
            </Text>

            <View style={styles.progressBarBackground}>
                <Animated.View
                    style={[
                        styles.progressBarFill,
                        {
                            width: animatedWidth.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'],
                            }),
                            backgroundColor: isOverLimit ? '#d9534f' : '#4caf50',
                        },
                    ]}
                />
            </View>

            {isOverLimit && (
                <Text style={styles.warningText}>
                    ⚠️ Você ultrapassou o limite de gastos do dia!
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        backgroundColor: 'rgba(1, 1, 0, 0.24)',
        borderRadius: 9,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    primalText: {
        fontSize: 18,
        fontWeight: '900',
    },
    secondText: {
        fontSize: 30,
        fontWeight: '900',
    },
    remaining: {
        marginTop: 10,
        fontSize: 11,
        fontWeight: '500',
    },
    progressBarBackground: {
        height: 12,
        backgroundColor: '#e0e0e0',
        borderRadius: 6,
        marginTop: 10,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 6,
    },
    warningText: {
        color: '#d9534f',
        fontWeight: '700',
        fontSize: 12,
        marginTop: 5,
    },
});
