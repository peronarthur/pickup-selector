const contextValuesMock = {
  zipcode: '',
  selectedItem: {},
  selectedQuantity: '0',
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
}

export default contextValuesMock
