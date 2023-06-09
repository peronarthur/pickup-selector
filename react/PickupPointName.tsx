import React, { useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'
import { siteEditor } from './utils/messages'

const CSS_HANDLES = ['pickupPointName'] as const

const PickupPointName: StorefrontFunctionComponent = () => {
  const { handles } = useCssHandles(CSS_HANDLES)

  const { index } = useContext(CardContext)
  const { pickupSlas } = useContext(ShippingContext)
  const { friendlyName } = pickupSlas[index]

  return (
    <p
      className={`${handles.pickupPointName} t-action--small mw6`}
      data-testid="store-name"
    >
      {friendlyName}
    </p>
  )
}

PickupPointName.schema = {
  title: siteEditor.pickupPointName.title.id,
  type: 'object',
}

export default PickupPointName
