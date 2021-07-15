import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24
  },
  guilds: {
    width: '100%'
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 11
  },
  type: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight,
    fontSize: 13,
    marginBottom: 24
  }
})
