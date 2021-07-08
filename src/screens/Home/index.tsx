import React from 'react'
import { View } from 'react-native'

import { Profile } from '../../components/Profile'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { styles } from './styles'

export function Home () {
  return (
    <Background>

      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>

      </View>

      <View>
        <CategorySelect />
      </View>

    </Background>
  )
}
