import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 104,
    width: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    paddingBottom: 10
  },
  content: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 3
  }

})
