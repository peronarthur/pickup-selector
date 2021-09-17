import type { FC } from 'react'
import React, { useCallback, useState, useMemo, useEffect } from 'react'
import type { PickupOption } from 'vtex.checkout-graphql'
import { useProduct, useProductDispatch } from 'vtex.product-context'
import type { Item } from 'vtex.product-context/react/ProductTypes'

import ShippingContext from './shippingContext'

const ShippingProvider: FC = (props) => {
  const productContext = useProduct()
  const productDispatch = useProductDispatch()

  const items = useMemo(
    () => productContext?.product?.items ?? [],
    [productContext?.product?.items]
  )

  const selectedQuantity = useMemo(
    () => productContext?.selectedQuantity?.toString() ?? '0',
    [productContext?.selectedQuantity]
  )

  const [zipcode, setZipcode] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<Partial<Item>>(
    productContext?.selectedItem ?? {}
  )

  const [pickupSlas, setPickupSlas] = useState<PickupOption[]>([])

  useEffect(() => {
    setSelectedItem(productContext?.selectedItem ?? {})
  }, [productContext?.selectedItem])

  const changeSelectedItem = useCallback(
    (_, selectedValue) => {
      const item = items.filter((listItem) => selectedValue === listItem.itemId)

      setSelectedItem(item[0])
      productDispatch?.({
        type: 'SET_SELECTED_ITEM',
        args: { item: item[0] },
      })
    },
    [items, setSelectedItem, productDispatch]
  )

  return (
    <ShippingContext.Provider
      value={{
        zipcode,
        selectedItem,
        selectedQuantity,
        pickupSlas,
        items,
        setZipcode,
        changeSelectedItem,
        setPickupSlas,
      }}
    >
      {props.children}
    </ShippingContext.Provider>
  )
}

export default ShippingProvider
