import React, { useContext } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import ShippingContext from './context/shippingContext'

const CSS_HANDLES = ['pickupSelectorSlaList'] as const

const PickupSlaList: StorefrontFunctionComponent = ({ children }) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const { pickupSlas } = useContext(ShippingContext)

  return (
    <div
      className={`${handles.pickupSelectorSlaList} mt4 mb4`}
      data-testid="card-list"
    >
      {pickupSlas.map((option, index) => {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: option.id,
              index,
            })
          }

          return null
        })
      })}
    </div>
  )
}

PickupSlaList.schema = {
  title: 'admin/editor.pickup-selector.zipcode-input.title',
  type: 'object',
}

export default PickupSlaList
