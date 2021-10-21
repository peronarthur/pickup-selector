import React from 'react'
import { Card } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import CardContext from './context/CardContext'
import { siteEditor } from './utils/messages'

const CSS_HANDLES = ['pickupPointOptionCard'] as const

type CardProps = {
  index: number
}

const OptionCard: StorefrontFunctionComponent<CardProps> = ({
  children,
  index,
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <CardContext.Provider value={{ index }}>
      <div
        className={`${handles.pickupPointOptionCard} mb4`}
        data-testid="card"
      >
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
  title: siteEditor.optionCard.title.id,
  type: 'object',
}

export default OptionCard
