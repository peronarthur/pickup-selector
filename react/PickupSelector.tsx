import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ToastProvider } from 'vtex.styleguide'

import ShippingProvider from './context/shippingProvider'
import { siteEditor } from './utils/messages'
import './styles.global.css'

const CSS_HANDLES = ['pickupSelectorContainer'] as const

const PickupSelector: StorefrontFunctionComponent = ({ children }) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <ToastProvider positioning="window">
      <ShippingProvider>
        <div
          className={`${handles.pickupSelectorContainer}`}
          data-testid="pickup-selector-container"
        >
          {React.Children.map(children, (child) => child)}
        </div>
      </ShippingProvider>
    </ToastProvider>
  )
}

PickupSelector.schema = {
  title: siteEditor.pickupSelector.title.id,
  type: 'object',
}

export default PickupSelector
