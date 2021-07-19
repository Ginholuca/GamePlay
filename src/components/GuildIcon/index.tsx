import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon () {
  const uri = 'https://ci.phncdn.com/pics/users/318/887/681/avatar1570986139/(m=eidYGCjadOf)(mh=VZZsrvQOsh4kk3aW)200x200.jpg'
  return (
  <Image
    source={{ uri }}
    style={styles.image}
    resizeMode="cover"
  />
  )
}
