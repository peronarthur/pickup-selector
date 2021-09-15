import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'

import ShippingContext from './context/shippingContext'
import { editor, zipcodeInput } from './utils/messages'

const ZipcodeInput: StorefrontFunctionComponent = () => {
  const { zipcode, setZipcode } = useContext(ShippingContext)

  return (
    <div className="mb4">
      <Input
        label={zipcodeInput.label}
        value={zipcode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setZipcode(e.target.value)
        }
      />
    </div>
  )
}

ZipcodeInput.schema = {
  title: editor.zipcodeInput.title,
  type: 'object',
}

export default ZipcodeInput
