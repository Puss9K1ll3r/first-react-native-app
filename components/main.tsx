import { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';


export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Contacts');
    }

    const [news, setNews] = useState([
        { name: 'Google', anons: 'Google!!', full: 'Google is cool', key: '1', img: require('../assets/img/idea.png') },
        { name: 'Apple', anons: 'Apple!!', full: 'Apple is cool', key: '2', img: require('../assets/img/imagine.png') },
        { name: 'VK', anons: 'VK!!', full: 'VK is cool', key: '3', img: require('../assets/img/cat.png') }
    ]);

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Добро пожаловать</Text>
            <FlatList 
                data={news} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                        <Image 
                            source={item.img}
                            style={{ width: '100%', height: 300 }}
                        />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>
                )} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30
    },
    title: {
        fontFamily: 'r-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'r-reg',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    }
})