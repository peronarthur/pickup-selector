import React, { useContext, useCallback } from 'react'
import { Button } from 'vtex.styleguide'
import { useIntl } from 'react-intl'
import { useMutation } from 'react-apollo'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import type { Item } from 'vtex.product-context/react/ProductTypes'
import { useCssHandles } from 'vtex.css-handles'

import ShippingContext from './context/shippingContext'
import { selectPickupPoint } from './utils/messages'
import ADD_TO_CART from './graphql/queries/addToCart.gql'
import SET_SELECTED_ADDRESS from './graphql/queries/setSelectedAddress.gql'
import SELECT_PICKUP_OPTION from './graphql/queries/selectPickupOption.gql'
import CardContext from './context/CardContext'

const CSS_HANDLES = ['selectPickupPointButtonContainer'] as const

const SelectPickupPointButton: StorefrontFunctionComponent = () => {
  const intl = useIntl()
  const { handles } = useCssHandles(CSS_HANDLES)
  const { index } = useContext(CardContext)
  const { pickupSlas, selectedAddress, selectedItem, selectedQuantity } =
    useContext(ShippingContext)

  const { id } = pickupSlas[index]

  const { setOrderForm } = useOrderForm()

  const [addToCart, { loading }] = useMutation(ADD_TO_CART)
  const [setSelectedAddress] = useMutation(SET_SELECTED_ADDRESS)
  const [setPickupOption] = useMutation(SELECT_PICKUP_OPTION)

  const onClick = useCallback(async () => {
    const item = selectedItem as Item

    const mutationResult = await addToCart({
      variables: {
        items: [
          {
            id: parseInt(item.itemId, 10),
            quantity: parseFloat(selectedQuantity),
            seller: item.sellers[0].sellerId,
          },
        ],
      },
    })

    await setOrderForm(mutationResult.data.addToCart)

    const setAddressResult = await setSelectedAddress({
      variables: {
        address: selectedAddress,
      },
    })

    await setOrderForm(setAddressResult.data.updateSelectedAddress)

    const setPickupOptionResponse = await setPickupOption({
      variables: {
        pickupOptionId: id,
      },
    })

    await setOrderForm(setPickupOptionResponse.data.selectPickupOption)
  }, [
    addToCart,
    id,
    setPickupOption,
    setSelectedAddress,
    selectedAddress,
    selectedItem,
    selectedQuantity,
    setOrderForm,
  ])

  return (
    <div className={`${handles.selectPickupPointButtonContainer}`}>
      <Button variation="primary" onClick={onClick} isLoading={loading} block>
        {intl.formatMessage(selectPickupPoint.label)}
      </Button>
    </div>
  )
}

SelectPickupPointButton.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-button.title',
  type: 'object',
}

export default SelectPickupPointButton
