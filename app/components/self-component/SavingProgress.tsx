import { useAppContext } from '@/app/context/useAppContext';
import percentageAchieved from '@/app/functions/percentagemRemaining';
import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SavingProgress() {
  const { objetivos } = useAppContext();

  const objetivosArray = Object.values(objetivos || {});

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Objetivos</Text>

      {objetivosArray.map((obj, index) => {
        const progress = (obj.achived / obj.goal) * 100;
        const isOverLimit = progress >= 100;

        const animatedWidth = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.timing(animatedWidth, {
            toValue: Math.min(progress, 100),
            duration: 800,
            useNativeDriver: false,
          }).start();
        }, [progress]);

        return (
          <View key={index} style={styles.goalCard}>
            <Text style={styles.goalName}>{obj.name}</Text>
            <Text style={styles.goalValue}>Meta: R$ {obj.goal}</Text>
            <Text style={styles.goalProgressText}>
              {percentageAchieved(obj.goal, obj.achived)}
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
                    backgroundColor: isOverLimit ? '#4caf50' : '#2196f3',
                  },
                ]}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  title: {
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  goalCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 4,
  },
  goalName: {
    fontWeight: '600',
    fontSize: 14,
  },
  goalValue: {
    color: '#555',
  },
  goalProgressText: {
    marginTop: 4,
    fontSize: 12,
    color: '#777',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
});
