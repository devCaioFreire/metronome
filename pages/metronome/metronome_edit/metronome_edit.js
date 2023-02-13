import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';

const MetronomeEdit = ({ visible, onClose }) => {

    const [bpm, setBpm] = useState(4);
    const [buttonSelected, setButtonSelected] = useState(0);

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

    function handleSelected(id) {
        setButtonSelected(id)
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.container}>

                {/* Part 1 */}
                <View>
                    <Text style={styles.title}>
                        Batidas Por Minuto
                    </Text>
                    <Text style={styles.bpmIndicator}>
                        {bpm}
                    </Text>

                    {/* Content BPM */}
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

                <View style={[styles.bar, Platform.OS === 'android' ? { marginTop: 17 } : { marginTop: 43.5 }]}></View>

                {/* Part 2 */}
                <View>
                    <Text style={styles.title}>
                        Divisão de Batidas
                    </Text>

                    {/* BPM Style */}
                    <View style={styles.division}>

                        {/* Divison 1 */}
                        <TouchableOpacity style={[styles.type_bpm, buttonSelected === 0 ? { backgroundColor: '#00D93899' } : '']} activeOpacity={0.7} onClick={() => handleSelected(1)}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_One.png')}
                                style={{ alignSelf: 'center', width: 10, height: 30, marginTop: 7 }}
                            />
                        </TouchableOpacity>

                        {/* Divison 2 */}
                        <TouchableOpacity style={[styles.type_bpm, buttonSelected === 1 ? { backgroundColor: '#00D93890' } : '']} activeOpacity={0.7} onClick={() => handleSelected(2)}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_Two.png')}
                                style={{ alignSelf: 'center', width: 15, height: 25, marginTop: 10 }}
                            />
                        </TouchableOpacity>

                        {/* Divison 3 */}
                        <TouchableOpacity style={[styles.type_bpm, buttonSelected === 3 ? { backgroundColor: '#00D93890' } : '']} activeOpacity={0.7} onClick={() => handleSelected(3)}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_Three.png')}
                                style={{ alignSelf: 'center', width: 23, height: 20, marginTop: 12 }}
                            />
                        </TouchableOpacity>


                    </View>

                    {/* Divison Part 2 */}
                    <View style={[styles.division, { marginTop: 30 }]}>

                        {/* Divison 4 */}
                        <TouchableOpacity style={styles.type_bpm} activeOpacity={0.7}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_Four.png')}
                                style={{ alignSelf: 'center', width: 30, height: 21, marginTop: 12 }}
                            />
                        </TouchableOpacity>

                        {/* Divison 5 */}
                        <TouchableOpacity style={styles.type_bpm} activeOpacity={0.7}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_One.png')}
                                style={{ alignSelf: 'center', width: 10, height: 30, marginTop: 7 }}
                            />
                        </TouchableOpacity>

                        {/* Divison 6 */}
                        <TouchableOpacity style={styles.type_bpm} activeOpacity={0.7}>
                            <Image
                                source={require('../../../assets/NOTE_Musical_One.png')}
                                style={{ alignSelf: 'center', width: 10, height: 30, marginTop: 7 }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.exit}>
                    <TouchableOpacity onPress={onClose} >
                        <Text style={styles.btnExit}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.btnExit}>
                        <Text style={styles.btnExit}>Salvar</Text>
                    </TouchableOpacity>
                </View>


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
        color: '#D7D7D7',
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
    },
    division: {
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-evenly',
        width: '100%'
    },
    type_bpm: {
        borderWidth: 1,
        borderColor: '#74747470',
        backgroundColor: 'transparent',
        width: 45,
        height: 45,
        borderRadius: 100
    },
    exit: {
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-around',
        width: '100%'
    },
    btnExit: {
        color: '#00D938',
        fontSize: 18,
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        textShadowColor: '#00000070',
    }
});

export default MetronomeEdit;