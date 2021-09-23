import React, { useContext } from 'react'
import { useIntl } from 'react-intl'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'
import { DECIMALS } from './utils/constants'
import { pickupPointDistance } from './utils/messages'

const PickupPointDistance: StorefrontFunctionComponent = () => {
  const intl = useIntl()
  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { storeDistance } = pickupSlas[index]
  const formattedDistance = storeDistance
    ? `${storeDistance.toFixed(DECIMALS)} Km`
    : intl.formatMessage(pickupPointDistance.label)

  return (
    <p className="t-small mw6" data-testid="distance">
      {formattedDistance}
    </p>
  )
}

PickupPointDistance.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-distance.title',
  type: 'object',
}

export default PickupPointDistance
