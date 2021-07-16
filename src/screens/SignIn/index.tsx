import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'

import { AuthContext } from '../../context/auth'

import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn () {
  const navigation = useNavigation()

  const context = useContext(AuthContext)

  function handleSignIn () {
    navigation.navigate('Home')
  }

  return (
  <Background>
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com DIscord"
        onPress={handleSignIn}
        />
      </View>
    </View>
  </Background>
  )
}
