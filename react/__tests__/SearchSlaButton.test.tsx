import React from 'react'
import { render, fireEvent } from '@vtex/test-tools/react'

import SearchSlaButton from '../SearchSlaButton'
import ShippingContext from '../context/shippingContext'
// eslint-disable-next-line jest/no-mocks-import
import contextValuesMock from '../__mocks__/context'

describe('SearchSlaButton', () => {
  it('Should render the button', () => {
    const { queryByRole } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <SearchSlaButton />
      </ShippingContext.Provider>
    )

    expect(queryByRole('button')).toBeInTheDocument()
  })

  it('Should show the disabled button if postal code is invalid', () => {
    const { queryByRole } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <SearchSlaButton />
      </ShippingContext.Provider>
    )

    const button = queryByRole('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('Should show the clickable button if postal code is valid', () => {
    const { queryByRole } = render(
      <ShippingContext.Provider
        value={{ ...contextValuesMock, zipcode: '12345678' }}
      >
        <SearchSlaButton />
      </ShippingContext.Provider>
    )

    const button = queryByRole('button')

    expect(button).not.toHaveAttribute('disabled')
  })

  it('Should call on click handle', async () => {
    const onSearchClick = jest.fn()
    const { queryByRole } = render(
      <ShippingContext.Provider
        value={{ ...contextValuesMock, zipcode: '12345678' }}
      >
        <SearchSlaButton />
      </ShippingContext.Provider>
    )

    const button = queryByRole('button') as HTMLButtonElement

    button.onclick = onSearchClick
    fireEvent.click(button)
    expect(onSearchClick).toBeCalled()
  })
})
