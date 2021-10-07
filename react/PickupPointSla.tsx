import React, { useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'

const CSS_HANDLES = ['pickupPointSla'] as const

const PickupPointSla: StorefrontFunctionComponent = () => {
  const { handles } = useCssHandles(CSS_HANDLES)

  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { estimate } = pickupSlas[index]

  return (
    <p
      className={`${handles.pickupPointSla} f6 gray mw6`}
      data-testid="pickup-point-sla"
    >
      <TranslateEstimate shippingEstimate={estimate} isPickup />
    </p>
  )
}

PickupPointSla.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-sla.title',
  type: 'object',
}

export default PickupPointSla
