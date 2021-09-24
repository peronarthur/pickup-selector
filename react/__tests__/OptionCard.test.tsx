/* eslint-disable react/no-children-prop */
import React from 'react'
import { render } from '@vtex/test-tools/react'
import type { PickupOption } from 'vtex.checkout-graphql'

import OptionCard from '../OptionCard'
import PickupPointName from '../PickupPointName'

jest.mock('../PickupPointName', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: () => <div>hi</div>,
  }
})

describe('OptionCard', () => {
  const cardInfo: PickupOption = {
    id: 'id',
    address: {},
    deliveryChannel: '',
    price: 1000,
    estimate: '2bd',
    isSelected: false,
    friendlyName: 'Pickup point name',
    businessHours: [
      { dayNumber: '1', closed: false, closingTime: '18', openingTime: '8' },
    ],
  }

  const children = [<PickupPointName key="1" name={cardInfo.friendlyName} />]
  const index = 0

  it('Should show the card', () => {
    const { container } = render(
      <OptionCard children={children} index={index} />
    )

    expect(container).toBeTruthy()
  })

  it('Should render children props', () => {
    const { getByTestId } = render(
      <OptionCard children={children} index={index} />
    )

    const card = getByTestId('card')

    expect(card.children).toHaveLength(1)
  })
})
