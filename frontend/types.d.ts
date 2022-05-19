export interface Events {
  name: string;
  id: string;
  url: string;
  info: string;
  pleaseNote: string;
  ticketLimit: {
    info: string;
  };
  priceRanges: [
    {
      currency: string;
      max: number;
      min: number;
      type: string;
    }
  ];
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
    status: {
      code: string;
    };
  };
  _embedded: {
    venues: [
      {
        name: string;
        postalCode: string;
        address: {
          line1: string;
        };
        boxOfficeInfo: {
          acceptedPaymentDetail: string;
          openHoursDetail: string;
          phoneNumberDetail: string;
        };
        parkingDetail: string;
        city: {
          name: string;
        };
        state: {
          name: string;
          stateCode: string;
        };
        country: {
          name: string;
        };
        generalInfo: {
          childRule: string;
          generalRule: string;
        };
        images: [
          {
            ratio: string;
            url: string;
            width: number;
            height: number;
            attribution: string;
          }
        ];
      }
    ];
  };
}
