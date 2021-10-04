import React, { useContext, useState, useCallback } from 'react'
import { Input } from 'vtex.styleguide'
import { useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import ShippingContext from './context/shippingContext'
import { zipcodeInput } from './utils/messages'

const CSS_HANDLES = ['zipcodeInputContainer'] as const

const ZipcodeInput: StorefrontFunctionComponent = () => {
  const intl = useIntl()
  const { handles } = useCssHandles(CSS_HANDLES)

  const [localZipcode, setLocalZipcode] = useState<string>('')

  const { setZipcode } = useContext(ShippingContext)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 8) {
        setZipcode(e.target.value)
      }

      setLocalZipcode(e.target.value)
    },
    [setZipcode, setLocalZipcode]
  )

  return (
    <div className={`${handles.zipcodeInputContainer} mb4`}>
      <Input
        label={intl.formatMessage(zipcodeInput.label)}
        value={localZipcode}
        onChange={onChange}
      />
    </div>
  )
}

ZipcodeInput.schema = {
  title: 'admin/editor.pickup-selector.zipcode-input.title',
  type: 'object',
}

export default ZipcodeInput
