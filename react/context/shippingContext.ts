import React from 'react'
import type { Address, PickupOption } from 'vtex.checkout-graphql'
import type { Item } from 'vtex.product-context/react/ProductTypes'

interface ShippingContextType {
  zipcode: string
  selectedItem: Partial<Item>
  selectedQuantity: string
  selectedAddress: Address
  pickupSlas: PickupOption[]
  setZipcode: (zipcode: string) => void
  setPickupSlas: (pickupOption: PickupOption[]) => void
  setSelectedAddress: (address: Address) => void
}

const ShippingContext = React.createContext<ShippingContextType>({
  zipcode: '',
  selectedItem: {},
  selectedQuantity: '0',
  selectedAddress: {},
  pickupSlas: [],
  setZipcode: () => {},
  setPickupSlas: () => {},
  setSelectedAddress: () => {},
})

export default ShippingContext
