import type { FC } from 'react'
import React, { useCallback, useState, useMemo, useEffect } from 'react'
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

  const [zipcode, setZipcode] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<Partial<Item>>(
    productContext?.selectedItem ?? {}
  )

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
        items,
        setZipcode,
        changeSelectedItem,
      }}
    >
      {props.children}
    </ShippingContext.Provider>
  )
}

export default ShippingProvider
