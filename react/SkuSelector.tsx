import React, { useContext, useMemo } from 'react'
import { Dropdown } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import ShippingContext from './context/shippingContext'
import { skuSelector } from './utils/messages'

const SkuSelector: StorefrontFunctionComponent = () => {
  const intl = useIntl()

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
        label={intl.formatMessage(skuSelector.label)}
        options={options}
        value={selectedItem.itemId}
        onChange={changeSelectedItem}
      />
    </div>
  )
}

SkuSelector.schema = {
  title: 'admin/editor.pickup-selector.sku-selector.title',
  type: 'object',
}

export default SkuSelector
