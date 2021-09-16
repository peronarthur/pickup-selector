import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import ShippingProvider from './context/shippingProvider'

const CSS_HANDLES = ['pickupSelectorContainer'] as const

const PickupSelector: StorefrontFunctionComponent = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <ShippingProvider>
      <div
        className={`${handles.pickupSelectorContainer} flex-s justify-between-s`}
      >
        {React.Children.map(children, (child) => child)}
      </div>
    </ShippingProvider>
  )
}

PickupSelector.schema = {
  title: 'admin/editor.pickup-selector.title',
  type: 'object',
}

export default PickupSelector
