/* eslint-disable jest/no-mocks-import */
import React from 'react'
import { render, fireEvent } from '@vtex/test-tools/react'

import ZipcodeInput from '../ZipcodeInput'
import ShippingContext from '../context/shippingContext'
import contextValuesMock from '../__mocks__/context'

describe('StoreName', () => {
  const event = {
    target: { value: '12345678' },
  }

  it('Should render the input', () => {
    const { container } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <ZipcodeInput />
      </ShippingContext.Provider>
    )

    expect(container).toBeTruthy()
  })

  it('Should trigger the onChange event', () => {
    const { container } = render(
      <ShippingContext.Provider value={contextValuesMock}>
        <ZipcodeInput />
      </ShippingContext.Provider>
    )

    const input = container.querySelectorAll('input')

    fireEvent.change(input[0], event)
    expect(input[0].value).toBe(event.target.value)
  })
})
