import React, { useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'

const CSS_HANDLES = ['pickupPointAddress'] as const

const PickupPointAddress: StorefrontFunctionComponent = () => {
  const { handles } = useCssHandles(CSS_HANDLES)

  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { address } = pickupSlas[index]
  const { street, city, state, number, neighborhood } = address

  const line1 = `${street} ${number}`
  const line2 = `${neighborhood}`
  const line3 = `${city} - ${state}`

  return (
    <address className={`${handles.pickupPointAddress}`} data-testid="address">
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
