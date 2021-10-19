import React, { useContext, useMemo } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import EmptyList from './components/searchSlaButton/EmptyList'
import ShippingContext from './context/shippingContext'
import { siteEditor } from './utils/messages'

const CSS_HANDLES = ['pickupSelectorSlaList'] as const

const PickupSlaList: StorefrontFunctionComponent = ({ children }) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const { pickupSlas, searchedSlasStatus } = useContext(ShippingContext)

  const showEmptyState = useMemo(
    () =>
      searchedSlasStatus.called &&
      pickupSlas.length === 0 &&
      !searchedSlasStatus.loading,
    [searchedSlasStatus, pickupSlas]
  )

  return (
    <div
      className={`${handles.pickupSelectorSlaList} mt4 mb4`}
      data-testid="card-list"
    >
      {pickupSlas.map((option, index) => {
        return React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: option.id,
              index,
            })
          }

          return null
        })
      })}
      {showEmptyState ? <EmptyList /> : null}
    </div>
  )
}

PickupSlaList.schema = {
  title: siteEditor.pickupSlaList.title.id,
  type: 'object',
}

export default PickupSlaList
