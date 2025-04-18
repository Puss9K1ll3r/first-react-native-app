import { StyleSheet, TextInput, View, Button } from 'react-native';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
    return (
        <View>
            <Formik
                initialValues={{
                    name: '',
                    anons: '',
                    full: '',
                    img: '' // Здесь будет URL изображения
                }}
                onSubmit={(values, action) => {
                    addArticle(values);
                    action.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name} 
                            placeholder='Введите название' 
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.anons} 
                            multiline
                            placeholder='Введите описание' 
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.full}
                            multiline 
                            placeholder='Введите текст статьи' 
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput 
                            style={styles.input}
                            value={props.values.img} 
                            placeholder='Введите URL изображения' 
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title='Создать' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5
    }
});