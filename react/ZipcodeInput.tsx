import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import ShippingContext from './context/shippingContext'
import { zipcodeInput } from './utils/messages'

const ZipcodeInput: StorefrontFunctionComponent = () => {
  const intl = useIntl()

  const { zipcode, setZipcode } = useContext(ShippingContext)

  return (
    <div className="mb4">
      <Input
        label={intl.formatMessage(zipcodeInput.label)}
        value={zipcode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setZipcode(e.target.value)
        }
      />
    </div>
  )
}

ZipcodeInput.schema = {
  title: 'admin/editor.pickup-selector.zipcode-input.title',
  type: 'object',
}

export default ZipcodeInput
