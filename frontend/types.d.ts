export interface Events {
  name: string;
  id: string;
  url: string;
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
        address: {
          line1: string;
        };
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
