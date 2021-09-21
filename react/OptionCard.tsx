import React from 'react'
import type { PickupOption } from 'vtex.checkout-graphql'
import { Card } from 'vtex.styleguide'

import { setCardChildrenProps } from './utils/setCardChildrenProps'

type CardProps = {
  cardInfo: PickupOption
}

const OptionCard: StorefrontFunctionComponent<CardProps> = ({
  cardInfo,
  children,
}) => {
  return (
    <div className="mb4" data-testid="card">
      <Card>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { props } = child

            return React.cloneElement(
              child,
              setCardChildrenProps(props, cardInfo)
            )
          }

          return null
        })}
      </Card>
    </div>
  )
}

OptionCard.schema = {
  title: 'admin/editor.pickup-selector.option-card.title',
  type: 'object',
}

export default OptionCard
