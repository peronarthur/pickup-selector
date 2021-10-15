import React from 'react'
import type { Address, PickupOption } from 'vtex.checkout-graphql'
import type { Item } from 'vtex.product-context/react/ProductTypes'

import type { SearchedSlasStatus } from '../typings/pickup'

interface ShippingContextType {
  zipcode: string
  selectedItem: Partial<Item>
  selectedQuantity: string
  selectedAddress: Address
  pickupSlas: PickupOption[]
  searchedSlasStatus: SearchedSlasStatus
  setZipcode: (zipcode: string) => void
  setPickupSlas: (pickupOption: PickupOption[]) => void
  setSelectedAddress: (address: Address) => void
  setSearchedSlasStatus: (value: SearchedSlasStatus) => void
}

const ShippingContext = React.createContext<ShippingContextType>({
  zipcode: '',
  selectedItem: {},
  selectedQuantity: '0',
  selectedAddress: {},
  pickupSlas: [],
  searchedSlasStatus: {
    loading: false,
    called: false,
  },
  setZipcode: () => {},
  setPickupSlas: () => {},
  setSelectedAddress: () => {},
  setSearchedSlasStatus: () => {},
})

export default ShippingContext
