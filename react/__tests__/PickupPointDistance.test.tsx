import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointDistance from '../PickupPointDistance'
import ShippingContext from '../context/shippingContext'
import CardContext from '../context/CardContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

describe('PickupPointDistance', () => {
  const index = 0

  it('Should render the distance', () => {
    const { queryByTestId } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <PickupPointDistance />
        </CardContext.Provider>
      </ShippingContext.Provider>
    )

    expect(queryByTestId('distance')).toBeInTheDocument()
  })
})
