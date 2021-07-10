import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon () {
  const uri = 'https://scontent.fgig4-1.fna.fbcdn.net/v/t31.18172-8/25438777_1514552038582117_8591011306994106360_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6MCbehN4CY8AX-HyEb6&_nc_ht=scontent.fgig4-1.fna&oh=df91d2f2e0d186e486e4d0c8ca474d45&oe=60EE1EDC'
  return (
  <Image
    source={{ uri }}
    style={styles.image}
    resizeMode="cover"
  />
  )
}
