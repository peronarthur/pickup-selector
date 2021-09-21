import React from 'react'

type Props = {
  name: string
}

const PickupPointName: StorefrontFunctionComponent<Props> = ({ name }) => {
  return (
    <p className="t-action--small mw6" data-testid="store-name">
      {name}
    </p>
  )
}

PickupPointName.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-name.title',
  type: 'object',
}

export default PickupPointName
