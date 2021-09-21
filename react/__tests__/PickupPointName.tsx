import React from 'react'
import { render } from '@vtex/test-tools/react'

import PickupPointName from '../PickupPointName'

describe('PickupPointName', () => {
  const name = 'Pickup Point Name'

  it('Should show the store name', () => {
    const { queryByText } = render(<PickupPointName name={name} />)

    expect(queryByText(name)).toBeInTheDocument()
  })
})
