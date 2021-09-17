import React, { useContext, useMemo, useEffect } from 'react'
import { Button } from 'vtex.styleguide'
import { useIntl } from 'react-intl'
import { useLazyQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import ShippingContext from './context/shippingContext'
import { searchSlaButton } from './utils/messages'
import GET_SHIPPING_SLA from './graphql/queries/getPickupSla.gql'
import { DEFAULT_SELLER } from './utils/constants'
import type { PickupSlasResponse } from './typings/pickup'

const CSS_HANDLES = ['searchSlaButtonContainer'] as const

const SearchSlaButton: StorefrontFunctionComponent = () => {
  const intl = useIntl()
  const { culture } = useRuntime()
  const handles = useCssHandles(CSS_HANDLES)

  const { zipcode, selectedItem, selectedQuantity, setPickupSlas } =
    useContext(ShippingContext)

  const isDisabled = useMemo(
    () => !zipcode || !selectedItem,
    [zipcode, selectedItem]
  )

  const [getPickupSla, { data, loading }] = useLazyQuery<PickupSlasResponse>(
    GET_SHIPPING_SLA,
    {
      variables: {
        items: [
          {
            id: selectedItem.itemId,
            quantity: selectedQuantity,
            seller: DEFAULT_SELLER,
          },
        ],
        postalCode: zipcode,
        country: culture.country,
      },
    }
  )

  useEffect(() => {
    setPickupSlas(data?.shippingSLA.pickupOptions ?? [])
  }, [data, loading, setPickupSlas])

  return (
    <div className={`${handles.searchSlaButtonContainer}`}>
      <Button
        variation="primary"
        disabled={isDisabled}
        onClick={() => getPickupSla()}
        isLoading={loading}
        block
      >
        {intl.formatMessage(searchSlaButton.label)}
      </Button>
    </div>
  )
}

SearchSlaButton.schema = {
  title: 'admin/editor.pickup-selector.search-sla-button.title',
  type: 'object',
}

export default SearchSlaButton
