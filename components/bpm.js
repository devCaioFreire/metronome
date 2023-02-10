import React, { useState, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

const BpmDisplay = () => {
    const [bpm, setBpm] = useState(60);
    const panResponder = useMemo(
        () =>
            PanResponder.create({
                onMoveShouldSetPanResponder: () => true,
                onPanResponderMove: (_, gestureState) => {
                    let newBpm = Math.max(40, bpm + gestureState.dy / 20);
                    newBpm = Math.max(40, newBpm);
                    setBpm(newBpm);
                }
            }),
        [bpm]
    );

    return (

        <View style={styles.container}>
            <Text style={styles.bpmText_More} {...panResponder.panHandlers}>{Math.round(bpm + 1)}</Text>
            <Text style={styles.bpmText} {...panResponder.panHandlers}>
                {Math.round(bpm)}
            </Text>
            {bpm !== 39 && <Text style={[styles.bpmText_Less, { opacity: bpm !== 40 ? 1 : 0 }]} {...panResponder.panHandlers}>{Math.round(bpm - 1)}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bpmText: {
        fontSize: 120,
        fontWeight: 'bold',
        color: '#D9D9D9',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 5,
        textShadowColor: '#000000',
    },
    bpmText_Less: {
        fontSize: 120,
        fontWeight: 'bold',
        color: '#d9d9d9',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 5,
        textShadowColor: '#000000',
    },
    bpmText_More: {
        fontSize: 120,
        fontWeight: 'bold',
        color: '#d9d9d9',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 5,
        textShadowColor: '#000000',
    }
});

export default BpmDisplay;