const contextValuesMock = {
  zipcode: '',
  selectedItem: {
    attachments: [],
    complementName: 'NAVEL ORANGES GROWN LARGE FRESH FRUIT',
    ean: '',
    estimatedDateArrival: null,
    images: [],
    kitItems: [],
    measurementUnit: 'un',
    name: 'Pack of 1',
    nameComplete: 'Navel Oranges Grown Large Fresh Fruit Pack of 1',
    referenceId: [{ Key: 'RefId', Value: '880320a' }],
    unitMultiplier: 1,
    variations: [],
    videos: [],
    itemId: '1',
    sellers: [
      {
        sellerId: '1',
      },
    ],
  },
  selectedQuantity: '1',
  selectedAddress: {
    addressId: null,
    addressType: null,
    complement: '',
    country: 'BRA',
    geoCoordinates: [-47.89517593383789, -22.001615524291992],
    receiverName: null,
    reference: '',
    street: 'street',
    number: '3',
    city: 'city',
    state: 'uf',
    neighborhood: 'neighborhood',
    postalCode: '12345678',
  },
  pickupSlas: [
    {
      id: 'store id',
      address: {
        street: 'street',
        number: '3',
        city: 'city',
        state: 'uf',
        neighborhood: 'neighborhood',
      },
      deliveryChannel: '',
      price: 1000,
      estimate: '2bd',
      storeDistance: 0.5675,
      isSelected: false,
      friendlyName: 'Store name',
      businessHours: [
        {
          dayNumber: '1',
          closed: false,
          closingTime: '18',
          openingTime: '8',
        },
      ],
    },
  ],
  setZipcode: () => {},
  setPickupSlas: () => {},
  setSelectedAddress: () => {},
}

export default contextValuesMock
