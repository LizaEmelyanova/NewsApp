import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
  return (
    <View>
        <Formik
            initialValues={{
                name: '',
                anons: '',
                full: '',
                url: ''
            }}
            onSubmit={(values, action) => {
                addArticle(values)
                action.resetForm()
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
                        placeholder='Введите анонс'
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
                        placeholder='Укажите фото'
                        onChangeText={props.handleChange('img')}
                    />
                    <Button
                        title='Добавить'
                        onPress={props.handleSubmit}
                    />
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
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});