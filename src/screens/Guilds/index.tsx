import React from 'react'
import { View, FlatList } from 'react-native'

import { Guild } from '../../components/Guild'
import { GuildProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds ({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  ]
  return (
  <View style={styles.container}>
    <FlatList
      data={guilds}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Guild
          data={item}
          onPress={() => handleGuildSelect(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <ListDivider isCentered />}
      ListHeaderComponent={() => <ListDivider isCentered />}
      contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
      style={styles.guilds}
    />

  </View>
  )
}
