import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointDistance from '../PickupPointDistance'
import ShippingContext from '../context/shippingContext'
import CardContext from '../context/CardContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

describe('PickupPointDistance', () => {
  const index = 0

  it('Should render the distance container', () => {
    const distanceSystem = 'metric'
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance distanceSystem={distanceSystem} />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    expect(queryByTestId('distance')).toBeInTheDocument()
  })

  it('Should render the distance in Km', () => {
    const distanceSystem = 'metric'
    const formattedDistance = '0.57 Km'
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance distanceSystem={distanceSystem} />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    const tag = queryByTestId('distance')

    expect(tag).toHaveTextContent(formattedDistance)
  })

  it('Should render the distance in mi', () => {
    const distanceSystem = 'imperial'
    const formattedDistance = '0.35 Mi'
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance distanceSystem={distanceSystem} />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    const tag = queryByTestId('distance')

    expect(tag).toHaveTextContent(formattedDistance)
  })

  it('Should render the distance in Km by default', () => {
    const distanceSystem = undefined
    const formattedDistance = '0.57 Km'
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance distanceSystem={distanceSystem} />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    const tag = queryByTestId('distance')

    expect(tag).toHaveTextContent(formattedDistance)
  })

  it('Should render the error message if distance does not exists', () => {
    const distanceSystem = 'metric'
    const pickupSlas = [
      {
        id: 'store id',
        address: {
          street: 'street',
          number: '3',
          city: 'city',
          state: 'uf',
          neighborhood: 'neighborhood',
        },
        deliveryChannel: '',
        price: 1000,
        estimate: '2bd',
        storeDistance: undefined,
        isSelected: false,
        friendlyName: 'Store name',
        businessHours: [
          {
            dayNumber: '1',
            closed: false,
            closingTime: '18',
            openingTime: '8',
          },
        ],
      },
    ]

    const errorMessage = 'Unknown distance'

    const { queryByTestId } = render(
      <ShippingContext.Provider value={{ ...contextValuesMock, pickupSlas }}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance distanceSystem={distanceSystem} />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    const tag = queryByTestId('distance')

    expect(tag).toHaveTextContent(errorMessage)
  })
})
