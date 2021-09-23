import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointName from '../PickupPointName'
import ShippingContext from '../context/shippingContext'
import CardContext from '../context/CardContext'
import contextValuesMock from '../__mocks__/context'

describe('PickupPointName', () => {
  const index = 0
  const name = contextValuesMock.pickupSlas[index].friendlyName

  it('Should show the store name', () => {
    const { queryByText } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointName />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    expect(queryByText(name)).toBeInTheDocument()
  })
})
