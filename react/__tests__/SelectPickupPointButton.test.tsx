/* eslint-disable jest/no-mocks-import */
import React from 'react'
import { render, fireEvent, act, flushPromises } from '@vtex/test-tools/react'
import type { Item } from 'vtex.product-context/react/ProductTypes'

import SelectPickupPointButton from '../SelectPickupPointButton'
import ShippingContext from '../context/shippingContext'
import contextValuesMock from '../__mocks__/context'
import CardContext from '../context/CardContext'
import ADD_TO_CART from '../graphql/queries/addToCart.gql'
import SET_SELECTED_ADDRESS from '../graphql/queries/setSelectedAddress.gql'
import SELECT_PICKUP_OPTION from '../graphql/queries/selectPickupOption.gql'
import { orderFormResponse } from '../__mocks__/orderFormResponse'

const mockPush = jest.fn()

jest.mock('vtex.pixel-manager', () => ({
  usePixel: () => ({ push: mockPush }),
}))

describe('SelectPickupPointButton', () => {
  const index = 0
  const addToCartMock = {
    request: {
      query: ADD_TO_CART,
      variables: {
        items: [
          {
            id: 4,
            quantity: 1,
            seller: '1',
          },
        ],
      },
    },
    result: {
      data: {
        addToCart: {
          ...orderFormResponse,
        },
      },
    },
  }

  const setAddressMock = {
    request: {
      query: SET_SELECTED_ADDRESS,
      variables: {
        address: {
          addressId: null,
          addressType: null,
          complement: '',
          country: 'BRA',
          geoCoordinates: [-47.89517593383789, -22.001615524291992],
          receiverName: null,
          reference: '',
          street: 'street',
          number: '3',
          city: 'city',
          state: 'uf',
          neighborhood: 'neighborhood',
          postalCode: '12345678',
        },
      },
    },
    result: {
      data: {
        updateSelectedAddress: {
          ...orderFormResponse,
        },
      },
    },
  }

  const selectPickupOptionMock = {
    request: {
      query: SELECT_PICKUP_OPTION,
      variables: {
        pickupOptionId: 'store id',
      },
    },
    result: {
      data: {
        selectPickupOption: {
          ...orderFormResponse,
        },
      },
    },
  }

  const selectedItem = {
    attachments: [],
    complementName: 'NAVEL ORANGES GROWN LARGE FRESH FRUIT',
    ean: '',
    estimatedDateArrival: null,
    images: [],
    kitItems: [],
    measurementUnit: 'un',
    name: 'Pack of 1',
    nameComplete: 'Navel Oranges Grown Large Fresh Fruit Pack of 1',
    referenceId: [{ Key: 'RefId', Value: '880320a' }],
    unitMultiplier: 1,
    variations: [],
    videos: [],
    itemId: '4',
    sellers: [
      {
        sellerId: '1',
        sellerName: 'name',
        sellerDefault: true,
        addToCartLink: 'link',
        commertialOffer: {
          Installments: [],
          discountHighlights: [],
          teasers: [],
          Price: 1000,
          ListPrice: 1000,
          spotPrice: 1000,
          SellingPrice: 1000,
          PriceWithoutDiscount: 1000,
          RewardValue: 10,
          PriceValidUntil: '1',
          AvailableQuantity: 12,
          Tax: 1,
          taxPercentage: 1,
          CacheVersionUsedToCallCheckout: 'string',
        },
      },
    ],
  } as Partial<Item>

  it('Should render the button', () => {
    const { queryByRole } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <SelectPickupPointButton />
      </ShippingContext.Provider>
    )

    expect(queryByRole('button')).toBeInTheDocument()
  })

  it('Should call click function', async () => {
    jest.useFakeTimers()
    const onClick = jest.fn()
    const ProviderValues = { ...contextValuesMock, selectedItem }

    const { container } = render(
      <ShippingContext.Provider value={ProviderValues}>
        <CardContext.Provider value={{ index }}>
          <SelectPickupPointButton showToastFeedback />
        </CardContext.Provider>
      </ShippingContext.Provider>,
      {
        graphql: {
          mocks: [addToCartMock, setAddressMock, selectPickupOptionMock],
          addTypename: false,
        },
      }
    )

    const buttons = container.querySelectorAll('button')
    const button = buttons[index]

    button.onclick = onClick

    act(() => {
      fireEvent.click(button)
    })

    await flushPromises()
    jest.runAllTimers()

    expect(onClick).toBeCalled()
    expect(mockPush).not.toBeCalled()
  })

  it.todo('Should check orderForm')
})
