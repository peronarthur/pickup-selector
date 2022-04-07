import React, { useContext, useCallback } from 'react'
import { Button, ToastContext } from 'vtex.styleguide'
import { useIntl } from 'react-intl'
import { useMutation } from 'react-apollo'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import type { Item } from 'vtex.product-context/react/ProductTypes'
import { useCssHandles } from 'vtex.css-handles'
import { usePixel } from 'vtex.pixel-manager'

import ShippingContext from './context/shippingContext'
import { selectPickupPoint, siteEditor } from './utils/messages'
import ADD_TO_CART from './graphql/queries/addToCart.gql'
import SET_SELECTED_ADDRESS from './graphql/queries/setSelectedAddress.gql'
import SELECT_PICKUP_OPTION from './graphql/queries/selectPickupOption.gql'
import CardContext from './context/CardContext'

const CSS_HANDLES = ['selectPickupPointButtonContainer'] as const
const CUSTOM_PIXEL_EVENT_NAME = 'addToCart'
const TOAST_AUTO_CLOSE_TIME_IN_MS = 5000

type SelectPickupPointButtonProps = {
  customPixelEventId?: string
  showToastFeedback?: boolean
}

const SelectPickupPointButton: StorefrontFunctionComponent<
  SelectPickupPointButtonProps
> = ({ customPixelEventId, showToastFeedback = false }) => {
  const intl = useIntl()
  const { push } = usePixel()
  const { showToast } = useContext(ToastContext)
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

    try {
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
      if (showToastFeedback) {
        showToast({
          message: intl.formatMessage(selectPickupPoint.success),
          duration: TOAST_AUTO_CLOSE_TIME_IN_MS,
        })
      } else {
        push({
          id: customPixelEventId,
          event: CUSTOM_PIXEL_EVENT_NAME,
          items: [],
        })
      }
    } catch (err) {
      console.error(err)
      showToast({
        message: intl.formatMessage(selectPickupPoint.error),
        duration: TOAST_AUTO_CLOSE_TIME_IN_MS,
      })
    }

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
    showToast,
    push,
    intl,
    customPixelEventId,
    showToastFeedback,
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
  title: siteEditor.selectPickupPointButton.title.id,
  type: 'object',
}

export default SelectPickupPointButton
