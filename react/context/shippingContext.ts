import React from 'react'
import type { Item } from 'vtex.product-context/react/ProductTypes'

interface ShippingContextType {
  zipcode: string
  selectedItem: Partial<Item>
  items: Item[]
  setZipcode: (zipcode: string) => void
  changeSelectedItem: (_: unknown, selectedValue: string) => void
}

const ShippingContext = React.createContext<ShippingContextType>({
  zipcode: '',
  selectedItem: {},
  items: [],
  setZipcode: () => {},
  changeSelectedItem: () => {},
})

export default ShippingContext
