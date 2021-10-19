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
  label: { id: 'pickup-selector.zipcode-input.label' },
})

export const skuSelector = defineMessages({
  label: { id: 'pickup-selector.sku-selector.label' },
})

export const searchSlaButton = defineMessages({
  label: { id: 'pickup-selector.search-sla-button.label' },
})

export const pickupPointDistance = defineMessages({
  label: { id: 'pickup-selector.pickup-point-distance.error.label' },
})

export const selectPickupPoint = defineMessages({
  label: { id: 'pickup-selector.select-pickup-point-button.label' },
  success: { id: 'pickup-selector.select-pickup-point-button.success' },
  error: { id: 'pickup-selector.select-pickup-point-button.error' },
})

export const pickupSlaList = defineMessages({
  emptyTitle: {
    id: 'pickup-selector.pickup-sla-list.empty-list.title',
  },
  emptyBody: {
    id: 'pickup-selector.pickup-sla-list.empty-list.body',
  },
})
