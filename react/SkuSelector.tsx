import React, { useContext, useMemo } from 'react'
import { Dropdown } from 'vtex.styleguide'

import ShippingContext from './context/shippingContext'
import { editor, skuSelector } from './utils/messages'

const SkuSelector: StorefrontFunctionComponent = () => {
  const { items, selectedItem, changeSelectedItem } =
    useContext(ShippingContext)

  const options = useMemo(() => {
    return items.map((item) => {
      return { value: item.itemId, label: item.name }
    })
  }, [items])

  return (
    <div className="mb4 mw5">
      <Dropdown
        label={skuSelector.label}
        options={options}
        value={selectedItem.itemId}
        onChange={changeSelectedItem}
      />
    </div>
  )
}

SkuSelector.schema = {
  title: editor.skuSelector.title,
  type: 'object',
}

export default SkuSelector
