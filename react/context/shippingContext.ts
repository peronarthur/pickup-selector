import React from 'react'
import type { PickupOption } from 'vtex.checkout-graphql'
import type { Item } from 'vtex.product-context/react/ProductTypes'

interface ShippingContextType {
  zipcode: string
  selectedItem: Partial<Item>
  selectedQuantity: string
  pickupSlas: PickupOption[]
  setZipcode: (zipcode: string) => void
  setPickupSlas: (pickupOption: PickupOption[]) => void
}

const ShippingContext = React.createContext<ShippingContextType>({
  zipcode: '',
  selectedItem: {},
  selectedQuantity: '0',
  pickupSlas: [],
  setZipcode: () => {},
  setPickupSlas: () => {},
})

export default ShippingContext
