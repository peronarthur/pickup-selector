import React from 'react'
import type { FC } from 'react'
import { useIntl } from 'react-intl'
import { Box } from 'vtex.styleguide'

import { pickupSlaList } from '../../utils/messages'

const EmptyList: FC = () => {
  const intl = useIntl()

  return (
    <Box>
      <h3 className="t-heading-3" data-testid="empty-state-title">
        {intl.formatMessage(pickupSlaList.emptyTitle)}
      </h3>
      <p className="t-body lh-copy mw9">
        {intl.formatMessage(pickupSlaList.emptyBody)}
      </p>
    </Box>
  )
}

export default EmptyList
