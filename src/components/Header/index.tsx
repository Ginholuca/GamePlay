import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import { theme } from '../../global/styles/theme'

// import { Container } from './styles';

type Props = {
  title: string
  action?: ReactNode
}

const Header: React.FC = ({ title, action }: Props) => {
  const { secondary100, secondary40 } = theme.colors
  return (
  <LinearGradient
    colors={[]}
  >

  </LinearGradient>
  )
}

export default Header
