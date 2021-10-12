import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'
import { DECIMALS } from './utils/constants'
import { pickupPointDistance } from './utils/messages'

const CSS_HANDLES = ['pickupPointDistance'] as const

type PickupPointDistanceProps = {
  distanceSystem?: 'metric' | 'imperial'
}

const PickupPointDistance: StorefrontFunctionComponent<PickupPointDistanceProps> =
  ({ distanceSystem = 'metric' }) => {
    const { handles } = useCssHandles(CSS_HANDLES)

    const intl = useIntl()
    const { index } = useContext(CardContext)
    const { pickupSlas } = useContext(ShippingContext)
    const { storeDistance } = pickupSlas[index]
    const systemUnit = distanceSystem === 'metric' ? 'Km' : 'Mi'

    const formatDistance = () => {
      if (storeDistance) {
        const calculateImperial = storeDistance * 0.62137

        if (distanceSystem === 'imperial') {
          return `${calculateImperial.toFixed(DECIMALS)} ${systemUnit}`
        }

        return `${storeDistance.toFixed(DECIMALS)} ${systemUnit}`
      }

      return intl.formatMessage(pickupPointDistance.label)
    }

    return (
      <p
        className={`${handles.pickupPointDistance} t-small mw6`}
        data-testid="distance"
      >
        {formatDistance()}
      </p>
    )
  }

PickupPointDistance.schema = {
  title: 'admin/editor.pickup-selector.pickup-point-distance.title',
  type: 'object',
}

export default PickupPointDistance
