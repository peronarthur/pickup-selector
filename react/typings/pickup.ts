import type { PickupOption } from 'vtex.checkout-graphql'

type ShippingSLA = {
  pickupOptions: PickupOption[]
}

export interface PickupSlasResponse {
  shippingSLA: ShippingSLA
}
