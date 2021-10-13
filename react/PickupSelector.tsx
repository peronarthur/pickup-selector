import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import ShippingProvider from './context/shippingProvider'
import { siteEditor } from './utils/messages'

const CSS_HANDLES = ['pickupSelectorContainer'] as const

const PickupSelector: StorefrontFunctionComponent = ({ children }) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <ShippingProvider>
      <div className={`${handles.pickupSelectorContainer}`}>
        {React.Children.map(children, (child) => child)}
      </div>
    </ShippingProvider>
  )
}

PickupSelector.schema = {
  title: siteEditor.pickupSelector.title.id,
  type: 'object',
}

export default PickupSelector
