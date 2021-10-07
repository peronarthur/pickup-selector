/* eslint-disable jest/no-mocks-import */
import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointSla from '../PickupPointSla'
import ShippingContext from '../context/shippingContext'
import CardContext from '../context/CardContext'
import contextValuesMock from '../__mocks__/context'

describe('PickupPointSla', () => {
  const index = 0

  it('Should show the pickup sla container', () => {
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointSla />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    expect(queryByTestId('pickup-point-sla')).toBeInTheDocument()
  })
})
