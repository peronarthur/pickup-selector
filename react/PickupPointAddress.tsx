import React, { useContext } from 'react'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'

const PickupPointAddress: StorefrontFunctionComponent = () => {
  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { address } = pickupSlas[index]
  const { street, city, state, number, neighborhood } = address

  const line1 = `${street} ${number}`
  const line2 = `${neighborhood}`
  const line3 = `${city} - ${state}`

  return (
    <address data-testid="address">
      <span className="t-body lh-copy mw6">{line1}</span>
      <br />
      <span className="t-body lh-copy mw6">{line2}</span>
      <br />
      <span className="t-body lh-copy mw6">{line3}</span>
    </address>
  )
}

PickupPointAddress.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-address.title',
  type: 'object',
}

export default PickupPointAddress
