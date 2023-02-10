import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const MetronomeEdit = ({ visible, onClose }) => {

    const [bpm, setBpm] = useState(4);

    function handleIncrease() {
        if (bpm < 12) {
            setBpm(bpm + 1);
        }
    }

    function handleDecrease() {
        if (bpm > 2) {
            setBpm(bpm - 1);
        }
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.container}>

                <View style={styles.bpm}>
                    <Text style={styles.title}>
                        Batidas Por Minuto
                    </Text>
                    <Text style={styles.bpmIndicator}>
                        {bpm}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.btnDecrease, Platform.OS === 'android' ? '' : { marginTop: 20 }]}>
                            <TouchableOpacity onPress={handleDecrease}>
                                <Text style={[styles.textDecrease, Platform.OS === 'android' ? { marginTop: -20 } : { marginTop: -10 }]}>-</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.btnIncrease, Platform.OS === 'android' ? '' : { marginTop: 20 }]}>
                            <TouchableOpacity onPress={handleIncrease}>
                                <Text style={[styles.textIncrease, Platform.OS === 'android' ? { marginTop: -13 } : { marginTop: -5 }]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={[styles.bar, Platform.OS === 'android' ? { marginTop: 15 } : { marginTop: 43.5 }]}></View>

                <TouchableOpacity onPress={onClose}>
                    <Text>Fechar</Text>
                </TouchableOpacity>

            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 560,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: '40%',
        borderRadius: 15,
        backgroundColor: '#353535',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    title: {
        color: '#D7D7D780',
        fontSize: 18,
        marginTop: 44,
        fontWeight: '500',
        alignSelf: 'center',
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 5,
        textShadowColor: '#000000',
    },
    bpmIndicator: {
        color: '#00D938',
        fontSize: 80,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 5,
        textShadowColor: '#00000090',
    },
    btnDecrease: {
        width: 100,
        height: 40,
        borderColor: '#00D938',
        borderWidth: 3,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
    },
    textDecrease: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 50,
        fontWeight: '200'
    },
    btnIncrease: {
        borderLeftWidth: 0,
        width: 100,
        height: 40,
        borderColor: '#00D938',
        borderWidth: 3,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
    },
    textIncrease: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 40,
        fontWeight: '200'
    },
    bar: {
        borderWidth: 2,
        borderColor: '#8C8C8C',
        width: '100%',
    }
});

export default MetronomeEdit;