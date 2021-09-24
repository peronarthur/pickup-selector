import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointAddress from '../PickupPointAddress'
import ShippingContext from '../context/shippingContext'
import CardContext from '../context/CardContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

describe('PickupPointAddress', () => {
  const index = 0
  const { address } = contextValuesMock.pickupSlas[index]

  const { street, city, state, number, neighborhood } = address
  const line1 = `${street} ${number}`
  const line2 = `${neighborhood}`
  const line3 = `${city} - ${state}`

  it('Should show the store address', () => {
    const { queryByText } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointAddress />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    expect(queryByText(line1)).toBeInTheDocument()
    expect(queryByText(line2)).toBeInTheDocument()
    expect(queryByText(line3)).toBeInTheDocument()
  })
})
