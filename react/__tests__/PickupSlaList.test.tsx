/* eslint-disable react/no-children-prop */
import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupSlaList from '../PickupSlaList'
import ShippingContext from '../context/shippingContext'
import OptionCard from '../OptionCard'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

jest.mock('../OptionCard', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: () => <div>hi</div>,
  }
})

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

  const children = [
    <OptionCard key="1" cardInfo={slaResponseListMock.pickupSlas[0]} />,
  ]

  it('Should render the list', () => {
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

  it('Should render the correct amount of cards', () => {
    const { getByTestId } = render(
      <ShippingContext.Provider
        value={{ ...contextValuesMock, ...slaResponseListMock }}
      >
        <PickupSlaList children={children} />
      </ShippingContext.Provider>
    )

    const slaList = getByTestId('card-list')

    expect(slaList.children).toHaveLength(2)
  })
})
