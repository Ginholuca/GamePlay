import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import { CategorySelect } from '../../components/CategorySelect'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Background } from '../../components/Background'
import { Profile } from '../../components/Profile'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Home () {
  const [category, setCategory] = useState('')

  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '9/7/2021 às 20:15h',
      description: 'É hoje que vamos chegar no challenger sem perder uma partida.'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '9/7/2021 às 20:15h',
      description: 'É hoje que vamos chegar no challenger sem perder uma partida.'
    }
  ]

  function handleCategorySelect (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentsDetails () {
    navigation.navigate('AppointmentsDetails')
  }

  function handleAppointmentsCreate () {
    navigation.navigate('AppointmentsCreate')
  }

  return (
    <Background>

    <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentsCreate}/>

      </View>

      <View>
        <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        />

        <ListHeader
        title="Partidas agendadas"
        subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}
              onPress={handleAppointmentsDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
    </View>

    </Background>
  )
}
