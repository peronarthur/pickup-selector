import React, { useContext, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import CardContext from './context/CardContext'
import ShippingContext from './context/shippingContext'
import { DECIMALS, IMPERIAL_SYSTEM_MULTIPLIER } from './utils/constants'
import { pickupPointDistance, siteEditor } from './utils/messages'

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

    const formatDistance = useMemo(() => {
      if (storeDistance) {
        if (distanceSystem === 'imperial') {
          const calculateImperial = storeDistance * IMPERIAL_SYSTEM_MULTIPLIER

          return `${calculateImperial.toFixed(DECIMALS)} ${systemUnit}`
        }

        return `${storeDistance.toFixed(DECIMALS)} ${systemUnit}`
      }

      return intl.formatMessage(pickupPointDistance.label)
    }, [distanceSystem, storeDistance, intl, systemUnit])

    return (
      <p
        className={`${handles.pickupPointDistance} t-small mw6`}
        data-testid="distance"
      >
        {formatDistance}
      </p>
    )
  }

PickupPointDistance.schema = {
  title: siteEditor.pickupPointDistance.title.id,
  type: 'object',
}

export default PickupPointDistance
