import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'
import { Ionicons } from '@expo/vector-icons'
import AppColors from '../global/Colors'

const {Navigator, Screen} = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1cbcc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options= {{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused}) => {
                        return (
                            <Ionicons 
                                name="ios-easel" 
                                size={size} 
                                color={focused ? AppColors["color-primary-light"] : color} 
                            />
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options= {{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused}) => {
                        return (
                            <Ionicons 
                                name="ios-heart" 
                                size={size} 
                                color={focused ? AppColors["color-primary-light"] : color} 
                                 />
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs