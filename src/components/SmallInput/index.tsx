import React from 'react'
import { View, TextInput, TextInputAndroidProps } from 'react-native'

import { styles } from './styles'

export function SmallInput ({ ...rest }: TextInputAndroidProps) {
  return (
  <TextInput
    style={styles.container}
    keyboardType="numeric"
    {...rest}
  />
  )
}
