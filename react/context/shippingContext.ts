import React from 'react'
import type { PickupOption } from 'vtex.checkout-graphql'
import type { Item } from 'vtex.product-context/react/ProductTypes'

interface ShippingContextType {
  zipcode: string
  selectedItem: Partial<Item>
  selectedQuantity: string
  pickupSlas: PickupOption[]
  items: Item[]
  setZipcode: (zipcode: string) => void
  changeSelectedItem: (_: unknown, selectedValue: string) => void
  setPickupSlas: (pickupOption: PickupOption[]) => void
}

const ShippingContext = React.createContext<ShippingContextType>({
  zipcode: '',
  selectedItem: {},
  selectedQuantity: '0',
  pickupSlas: [],
  items: [],
  setZipcode: () => {},
  changeSelectedItem: () => {},
  setPickupSlas: () => {},
})

export default ShippingContext
