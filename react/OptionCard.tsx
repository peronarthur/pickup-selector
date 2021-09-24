import React from 'react'
import { Card } from 'vtex.styleguide'

import CardContext from './context/CardContext'

type CardProps = {
  index: number
}

const OptionCard: StorefrontFunctionComponent<CardProps> = ({
  children,
  index,
}) => {
  return (
    <CardContext.Provider value={{ index }}>
      <div className="mb4" data-testid="card">
        <Card>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child)
            }

            return null
          })}
        </Card>
      </div>
    </CardContext.Provider>
  )
}

OptionCard.schema = {
  title: 'admin/editor.pickup-selector.option-card.title',
  type: 'object',
}

export default OptionCard
