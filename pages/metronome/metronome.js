import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import BpmDisplay from '../../components/bpm';
import MetronomeEdit from './metronome_edit/metronome_edit';

export default function Metronome() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.container, Platform.OS === 'android' ? styles.AndroidPadding : { paddingTop: 80 }]}>

            <View style={styles.header}>
                <View style={styles.header_bar_1}></View>
                <Image
                    source={require('../../assets/NOTE_Musical.png')}
                />
                <View style={styles.header_bar_2}></View>

                <TouchableOpacity style={styles.edit} activeOpacity={0.5} onPress={() => setModalVisible(true)}>
                    <Text style={styles.edit_text}>Editar</Text>
                </TouchableOpacity>

                <MetronomeEdit
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
            </View>

            <View style={[styles.content, Platform.OS === 'android' ? { marginBottom: -60 } : {}]}>
                <View style={styles.bar_1}></View>
                <Text><BpmDisplay /></Text>
                <View style={styles.bar_2}></View>
            </View>
            <View style={[styles.btnArea, Platform.OS === 'android' ? { marginBottom: 60 } : {}]}>
                <TouchableOpacity style={styles.btnStart} activeOpacity={0.5}>
                    <Text style={styles.textStart}>Começar</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252526'
    },
    IosPadding: {
        paddingTop: 50
    },
    AndroidPadding: {
        paddingTop: 80
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        start: 15
    },
    header_bar_1: {
        borderWidth: 2,
        borderColor: '#00D938',
        borderRadius: 3,
        width: 50,
        marginRight: 10
    },
    header_bar_2: {
        borderWidth: 2,
        borderColor: '#00D938',
        borderRadius: 3,
        width: 50,
        marginLeft: 10
    },
    edit: {
        start: 80
    },
    edit_text: {
        fontSize: 18,
        color: '#D7D7D780',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: -100
    },
    bar_1: {
        borderWidth: 2,
        borderColor: '#00D938',
        borderRadius: 3,
        width: 100,
    },
    bar_2: {
        borderWidth: 2,
        borderColor: '#00D938',
        borderRadius: 3,
        width: 100,
    },
    btnArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    btnStart: {
        padding: 10,
        backgroundColor: '#00D938',
        width: 200,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    textStart: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }
})