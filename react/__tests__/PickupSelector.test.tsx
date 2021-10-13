/* eslint-disable react/no-children-prop */
import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupSelector from '../PickupSelector'
import ZipcodeInput from '../ZipcodeInput'

describe('PickupSelector', () => {
  it('Should show the store address', () => {
    const { container } = render(<PickupSelector />)

    expect(container).toBeTruthy()
  })

  it('Should render children props', () => {
    const children = [<ZipcodeInput key={0} />]
    const { getByTestId } = render(<PickupSelector children={children} />)

    const container = getByTestId('pickup-selector-container')

    expect(container.children).toHaveLength(1)
  })
})
