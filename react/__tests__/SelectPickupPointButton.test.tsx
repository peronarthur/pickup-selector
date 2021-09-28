import React from 'react'
import { render, fireEvent, act } from '@vtex/test-tools/react'

import SelectPickupPointButton from '../SelectPickupPointButton'
import ShippingContext from '../context/shippingContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'
import CardContext from '../context/CardContext'
import ADD_TO_CART from '../graphql/queries/addToCart.gql'
import SET_SELECTED_ADDRESS from '../graphql/queries/setSelectedAddress.gql'
import SELECT_PICKUP_OPTION from '../graphql/queries/selectPickupOption.gql'

describe('SelectPickupPointButton', () => {
  jest.mock('../graphql/fragments/orderForm.gql')
  const index = 0
  const addToCartMock = {
    request: {
      query: ADD_TO_CART,
      variables: {
        items: [
          {
            id: 1,
            quantity: 1.0,
            seller: '1',
          },
        ],
      },
    },
    result: {},
  }

  const setAddressMock = {
    request: {
      query: SET_SELECTED_ADDRESS,
      variables: {
        address: {
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
          id: 'djaskdjsad',
        },
      },
    },
  }

  const selectPickupOptionMock = {
    request: {
      query: SELECT_PICKUP_OPTION,
      variables: {
        pickupOptionId: 'Ponto 5',
      },
    },
    result: {
      data: {
        selectPickupOption: {
          id: 'djaskdjsad',
        },
      },
    },
  }

  it('Should render the button', () => {
    const { queryByRole } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <SelectPickupPointButton />
      </ShippingContext.Provider>
    )

    expect(queryByRole('button')).toBeInTheDocument()
  })

  it('Should call click function', async () => {
    const onClick = jest.fn()
    const { container } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <CardContext.Provider value={{ index }}>
          <SelectPickupPointButton />
        </CardContext.Provider>
      </ShippingContext.Provider>,
      {
        graphql: {
          mocks: [addToCartMock, setAddressMock, selectPickupOptionMock],
          addTypename: true,
        },
      }
    )

    const buttons = container.querySelectorAll('button')
    const button = buttons[0]

    button.onclick = onClick

    act(() => {
      fireEvent.click(button)
    })

    expect(onClick).toBeCalled()
  })

  it.todo('Should check orderForm')
})
