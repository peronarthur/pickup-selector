import React, { useContext } from 'react'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'

const PickupPointName: StorefrontFunctionComponent = () => {
  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { friendlyName } = pickupSlas[index]

  return (
    <p className="t-action--small mw6" data-testid="store-name">
      {friendlyName}
    </p>
  )
}

PickupPointName.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-name.title',
  type: 'object',
}

export default PickupPointName
