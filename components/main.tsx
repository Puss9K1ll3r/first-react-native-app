import { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Contacts');
    }

    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!', full: 'Google is cool'},
        {name: 'Apple', anons: 'Apple!!', full: 'Apple is cool'},
        {name: 'VK', anons: 'VK!!', full: 'VK is cool'}
    ]);

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Добро пожаловать</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}