import { defineMessages } from 'react-intl'

export const siteEditor = defineMessages({
  pickupSelector: { title: { id: 'admin/editor.pickup-selector.title' } },
  zipcodeInput: {
    title: { id: 'admin/editor.pickup-selector.zipcode-input.title' },
  },
  searchSlaButton: {
    title: { id: 'admin/editor.pickup-selector.search-sla-button.title' },
  },
  pickupSlaList: {
    title: { id: 'admin/editor.pickup-selector.pickup-sla-list.title' },
  },
  optionCard: {
    title: { id: 'admin/editor.pickup-selector.option-card.title' },
  },
  pickupPointName: {
    title: { id: 'admin/editor.pickup-selector.pickup-point-name.title' },
  },
  pickupPointAddress: {
    title: { id: 'admin/editor.pickup-selector.pickup-point-address.title' },
  },
  pickupPointDistance: {
    title: { id: 'admin/editor.pickup-selector.pickup-point-distance.title' },
  },
  selectPickupPointButton: {
    title: {
      id: 'admin/editor.pickup-selector.select-pickup-point-button.title',
    },
  },
  pickupPointSla: {
    title: { id: 'admin/editor.pickup-selector.pickup-point-sla.title' },
  },
})

export const zipcodeInput = defineMessages({
  label: { id: 'store/pickup-selector.zipcode-input.label' },
})

export const searchSlaButton = defineMessages({
  label: { id: 'store/pickup-selector.search-sla-button.label' },
})

export const pickupPointDistance = defineMessages({
  label: { id: 'store/pickup-selector.pickup-point-distance.error.label' },
})

export const selectPickupPoint = defineMessages({
  label: { id: 'store/pickup-selector.select-pickup-point-button.label' },
  success: { id: 'store/pickup-selector.select-pickup-point-button.success' },
  error: { id: 'store/pickup-selector.select-pickup-point-button.error' },
})

export const pickupSlaList = defineMessages({
  emptyTitle: {
    id: 'store/pickup-selector.pickup-sla-list.empty-list.title',
  },
  emptyBody: {
    id: 'store/pickup-selector.pickup-sla-list.empty-list.body',
  },
})
