export const ProblemList = [
    { id: 1, name: 'Froad' },
    { id: 2, name: 'Stole' },
    { id: 3, name: 'Ley' },
]


export const Orders = [
    {
      id: 1,
      numOfSeat: 3,
      status: "accept",
      clientId: 15,
      client: {
        name: "Abboud",
        lastName: "Assaf",
        mobile: "0992448443",
      },
      date: "2024-05-05", // ISO 8601 date format
    },
    {
      id: 2,
      numOfSeat: 5,
      status: "accept",
      clientId: 12,
      client: {
        name: "Nisreen",
        lastName: "Melhem",
        mobile: "0991098295",
      },
      date: "2024-05-05",
    },
    {
      id: 3,
      numOfSeat: 2,
      status: "accept",
      clientId: 14,
      client: {
        name: "Takla",
        lastName: "Zidan",
        mobile: "099811690",
      },
      date: "2024-08-18",
    },
    {
      id: 4,
      numOfSeat: 8,
      status: "accept",
      clientId: 15,
      client: {
        name: "Rolana",
        lastName: "Kamarie",
        mobile: "0956503237",
      },
      date: "2024-05-19",
    },
    {
      id: 5,
      numOfSeat: 4,
      status: "wait",
      clientId: 11,
      client: {
        name: "Raheef",
        lastName: "Mahfoud",
        mobile: "0991098295",
      },
      date: "2024-05-11",
    },
    {
      id: 6,
      numOfSeat: 10,
      status: "wait",
      clientId: 60,
      client: {
        name: "Wajeeh",
        lastName: "Rabahie",
        mobile: "099811690",
      },
      date: "2024-08-10",
    },
    {
      id: 7,
      numOfSeat: 3,
      status: "wait",
      clientId: 17,
      client: {
        name: "Milad",
        lastName: "Melhem",
        mobile: "0992448443",
      },
      date: "2024-08-10",
    },
    {
      id: 8,
      numOfSeat: 5,
      status: "wait",
      clientId: 18,
      client: {
        name: "Rand",
        lastName: "Abboud",
        mobile: "0956503237",
      },
      date: "2024-05-12",
    },
  ];

export const Tours = [{
    sn:1,
    id: 11,
    title: 'Black Friday',
    startDate: '5/5/2024', startTime: '2:20 A.M',
    totalCost: 500,
    seatCost: 15,
    numOfSeat: 150,
    posted:false,
    status:true,
    clientRequest: []
},
{
    sn:2,
    id: 22,
    title: 'Summer Weekend',
    startDate: '1/6/2024', startTime: '6:00 A.M',
    totalCost: 400,
    seatCost: 10,
    numOfSeat: 200,
    posted:true,
    status:true,
    clientRequest: [{ numOfSeat: 3, status: 'accept' }, { numOfSeat: 5, status: 'accept' }, { numOfSeat: 5, status: 'wait' }, { numOfSeat: 2, status: 'refuse' },]
},
{sn:3,
    id: 23,
    title: 'Spring is Comming',
    startDate: '1/3/2024', startTime: '8:30 A.M',
    totalCost: 350,
    seatCost: 10,
    numOfSeat: 100,
    posted:false,
    status:false,
    clientRequest: []
},
]

export const PresenterAttachments =[
   {id:1,src:'https://E:/IT/React/Folder/tour-book/src/assets/images/restaurant3.png'},
   {id:2,src:'https://E:/IT/React/Folder/tour-book/src/assets/images/restaurant2.png'},
   {id:3,src:'https://E:/IT/React/Folder/tour-book/src/assets/images/restaurant1.png'},
   {id:4,src:'https://E:/IT/React/Folder/tour-book/src/assets/images/restaurant3.png'},
]