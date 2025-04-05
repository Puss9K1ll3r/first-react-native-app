import { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import Form from './form';

export default function Main({ navigation }) {
    const [news, setNews] = useState([
        { name: 'Теория струн', anons: 'Почему вселенная не так проста, какой кажется', full: 'Представим, что здесь очень длинный и скучный текст', key: '1', img: require('../assets/img/idea.png') },
        { name: 'Mail.ru', anons: 'Откуда ответы на все вопросы', full: 'Иллюминаты уже давно завладели всем интернетом и мы оказались в цифровой ловушке...', key: '2', img: require('../assets/img/imagine.png') },
        { name: 'Павел Дуров', anons: 'Миллиардер, плейбой, филантроп', full: 'Действительно удивительный человек', key: '3', img: require('../assets/img/cat.png') }
    ]);

    const [modalWindow, setModalWindow] = useState(false)

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={gStyle.main}>
            <Modal 
                visible={modalWindow}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Ionicons 
                            name="close-circle" 
                            size={34} 
                            color="red" 
                            style={styles.iconClose}
                            onPress={() => setModalWindow(false)}    
                        />
                        <Text style={styles.title}>Создать статью</Text>
                        <Form addArticle={addArticle}/>
                    </View>
                </View>
            </Modal>
            <Ionicons 
                name="add-circle" 
                size={34} 
                color="black" 
                style={styles.iconAdd}
                onPress={() => setModalWindow(true)}
            />
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
    iconAdd: {
        textAlign: 'right',
        marginBottom: 15
    },
    iconClose: {
        textAlign: 'right'
    },
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