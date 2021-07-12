import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import { View, ImageBackground, Text, FlatList } from 'react-native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'

import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'

import { styles } from './styles'

export function AppointmentsDetails () {
  const members = [
    {
      id: '1',
      username: 'Ginholuca',
      avatar_url: 'https://github.com/Ginholuca.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Bruninluca',
      avatar_url: 'https://github.com/Ginholuca.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'Sandsman',
      avatar_url: 'https://github.com/Ginholuca.png',
      status: 'online'
    }
  ]
  return (
  <Background>
    <Header
      title="Detalhes"
      action={
        <BorderlessButton>
          <Fontisto
            name="share"
            size={24}
            color={theme.colors.primary}
          />
        </BorderlessButton>
      }
    />

    <ImageBackground
    source={BannerImg}
    style={styles.banner}
    >
    <View style={styles.bannerContent}>
      <Text style={styles.title}>Lendários</Text>

      <Text style={styles.subtitle}>É hoje que vamos chegar no challenger sem perder</Text>
    </View>
    </ImageBackground>

    <ListHeader
    title="Jogadores"
    subtitle="Total 3"
    />

  <FlatList
  data={members}
  keyExtractor={item => item.id}
  renderItem={({item}) =>(

  )}
  />

  </Background>)
}
