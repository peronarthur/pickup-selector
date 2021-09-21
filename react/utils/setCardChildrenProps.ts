import type { PickupOption } from 'vtex.checkout-graphql'

type Props = {
  id: string
}

export const setCardChildrenProps = (props: Props, cardInfo: PickupOption) => {
  switch (props.id) {
    case 'pickup-selector-option-card-pickup-point-name':
      return { name: cardInfo.friendlyName }

    default:
      return {}
  }
}
