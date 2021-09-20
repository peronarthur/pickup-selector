import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupSlaList from '../PickupSlaList'
import ShippingContext from '../context/shippingContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

describe('PickupSlaList', () => {
  const slaResponseListMock = {
    pickupSlas: [
      {
        id: 'store id',
        address: {},
        deliveryChannel: '',
        price: 1000,
        estimate: '2bd',
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
      {
        id: 'store id 2',
        address: {},
        deliveryChannel: '',
        price: 1000,
        estimate: '2bd',
        isSelected: false,
        friendlyName: 'Store name 2',
        businessHours: [
          {
            dayNumber: '1',
            closed: false,
            closingTime: '18',
            openingTime: '8',
          },
        ],
      },
    ],
  }

  it('Should render the list cards', () => {
    const { getByTestId } = render(
      <ShippingContext.Provider
        value={{ ...contextValuesMock, ...slaResponseListMock }}
      >
        <PickupSlaList />
      </ShippingContext.Provider>
    )

    const slaList = getByTestId('card-list')

    expect(slaList).toBeTruthy()
  })
})
