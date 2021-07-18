import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { AppointmentsDetails } from '../screens/AppointmentsDetails'
import { AppointmentsCreate } from '../screens/AppointmentsCreate'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes () {
  return (
        <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent'
          }
        }}
        >
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppointmentsDetails"
                component={AppointmentsDetails}
            />

            <Screen
                name="AppointmentsCreate"
                component={AppointmentsCreate}
            />

        </Navigator>
  )
}
