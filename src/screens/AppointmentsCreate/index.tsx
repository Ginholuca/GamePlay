import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { View, Platform, Text, ScrollView, KeyboardAvoidingView } from 'react-native'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

import { CategorySelect } from '../../components/CategorySelect'
import { SmallInput } from '../../components/SmallInput'
import { Background } from '../../components/Background'
import { GuildIcon } from '../../components/GuildIcon'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'

export function AppointmentsCreate () {
  const [category, setCategory] = useState('')

  return (
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container} >

    <ScrollView>
    <Header
      title="Agendar partida"
    />

    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]} >
      Categoria
    </Text>

    <CategorySelect
      hasCheckBox
      setCategory={setCategory}
      categorySelected={category}
    />

    <View style={styles.form}>
     <RectButton>
      <View style={styles.select}>
      {
        /* <View style={styles.image} /> */
        <GuildIcon />
      }
        <View style={styles.selectBody}>
          <Text style={styles.label}>
            Selecione um servidor
          </Text>
        </View>

        <Feather
          name="chevron-right"
          color={theme.colors.heading}
          size={18}
        />

      </View>
     </RectButton>

    <View style={styles.field}>
      <View>
        <Text>
          Dia e mês
        </Text>

        <View style={styles.column}>
          <SmallInput maxLength={2} />
          <Text style={styles.divider}>
            /
          </Text>
          <SmallInput maxLength={2} />
        </View>

      </View>

      <View>
        <Text>
          Horário
        </Text>

        <View style={styles.column}>
          <SmallInput maxLength={2} />
          <Text style={styles.divider}>
            :
          </Text>
          <SmallInput maxLength={2} />
        </View>
      </View>
    </View>

    <View style={[styles.field, { marginBottom: 12 }]}>
      <Text style={styles.label}>
        Descrição
      </Text>

      <Text style={styles.caracteresLimit}>
        Max 100 caracteres
      </Text>
    </View>

    <TextArea
      multiline
      maxLength={100}
      numberOfLines={5}
      autoCorrect={false}
    />

      <View style={styles.footer}>
        <Button title="Agendar" />
      </View>
  </View>
  </ScrollView>

  <ModalView>
    <Guilds />
  </ModalView>
</KeyboardAvoidingView>
  )
}
