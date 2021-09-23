import React from 'react'
import { Card } from 'vtex.styleguide'

import CardConxtext from './context/CardContext'

type CardProps = {
  index: number
}

const OptionCard: StorefrontFunctionComponent<CardProps> = ({
  children,
  index,
}) => {
  return (
    <CardConxtext.Provider value={{ index }}>
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
    </CardConxtext.Provider>
  )
}

OptionCard.schema = {
  title: 'admin/editor.pickup-selector.option-card.title',
  type: 'object',
}

export default OptionCard
