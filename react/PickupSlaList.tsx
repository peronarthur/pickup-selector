import React, { useContext } from 'react'

import ShippingContext from './context/shippingContext'

const PickupSlaList: StorefrontFunctionComponent = ({ children }) => {
  const { pickupSlas } = useContext(ShippingContext)

  return (
    <div className="mt4 mb4" data-testid="card-list">
      {pickupSlas.map((option) => {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: option.id,
              cardInfo: option,
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
