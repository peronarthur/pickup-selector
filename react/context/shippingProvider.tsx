import type { FC } from 'react'
import React, { useState, useMemo, useEffect } from 'react'
import type { Address, PickupOption } from 'vtex.checkout-graphql'
import { useProduct } from 'vtex.product-context'
import type { Item } from 'vtex.product-context/react/ProductTypes'

import ShippingContext from './shippingContext'

const ShippingProvider: FC = (props) => {
  const productContext = useProduct()

  const selectedQuantity = useMemo(
    () => productContext?.selectedQuantity?.toString() ?? '0',
    [productContext?.selectedQuantity]
  )

  const [zipcode, setZipcode] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<Partial<Item>>(
    productContext?.selectedItem ?? {}
  )

  const [selectedAddress, setSelectedAddress] = useState<Address>({})

  const [pickupSlas, setPickupSlas] = useState<PickupOption[]>([])

  useEffect(() => {
    setSelectedItem(productContext?.selectedItem ?? {})
  }, [productContext?.selectedItem])

  return (
    <ShippingContext.Provider
      value={{
        zipcode,
        selectedItem,
        selectedQuantity,
        selectedAddress,
        pickupSlas,
        setZipcode,
        setPickupSlas,
        setSelectedAddress,
      }}
    >
      {props.children}
    </ShippingContext.Provider>
  )
}

export default ShippingProvider
