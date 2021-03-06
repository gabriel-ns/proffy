import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map(( teacher:Teacher) => teacher.id)
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    function handleToogleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFilterSubmit() {
        console.log(subject, week_day, time)
        const response = await api.get('classes', {
            params: {
                subject, week_day, time
            }
        })

        setTeachers(response.data)
        loadFavorites()
        setIsFiltersVisible(false)
    }

    useFocusEffect(() => {
        loadFavorites()
    })

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis' 
                headerRight={(
                    <BorderlessButton onPress={handleToogleFiltersVisible}>
                        <Feather name='filter' size={25} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor='#c1bccc'
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria?"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                placeholderTextColor='#c1bccc'
                                style={styles.input}
                                placeholder="Qual o dia?"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                            />
                            </View>

                            <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                placeholderTextColor='#c1bccc'
                                style={styles.input}
                                placeholder="Qual Horário?"
                                value={time}
                                onChangeText={text => setTime(text)}
                            />
                            </View>
                        </View>

                    <RectButton onPress={handleFilterSubmit} style ={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList