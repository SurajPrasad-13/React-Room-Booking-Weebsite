export const RoomStatus = [
  {
    id:'R101',
    type:'Standard',
    floor:1,
    price:'$123',
    status:'Available',
    guest:null
  },
  {
    id:'R102',
    type:'Deluxe',
    floor:1,
    price:'$180',
    status:'Occupied',
    guest:'John Smith'
  },
  {
    id:'R103',
    type:'Suite',
    floor:1,
    price:'$300',
    status:'Maintenance',
    guest:null
  },
  {
    id:'R201',
    type:'Standard',
    floor:2,
    price:'$123',
    status:'Available',
    guest:null
  },
  {
    id:'R202',
    type:'Premium',
    floor:2,
    price:'$230',
    status:'Occupied',
    guest:'Sarah Johnson'
  },
  {
    id:'R203',
    type:'Deluxe',
    floor:2,
    price:'$193',
    status:'Reserved',
    guest:'Mike Wilson'
  },
]

export const bookingData = [
  {
    guestName:'John Smith',
    bookingId:'Bk001',
    room:'R102',
    checkIn:'2024-01-15',
    checkOut:'2024-01-18',
    guestCount:2,
    booking:'active',
    bill:'$540'
  },
  {
    guestName:'Sarah Johnson',
    bookingId:'Bk002',
    room:'R202',
    checkIn:'2024-01-16',
    checkOut:'2024-01-20',
    guestCount:1,
    booking:'active',
    bill:'$880'
  },
  {
    guestName:'Mike Wilson',
    bookingId:'Bk003',
    room:'R203',
    checkIn:'2024-01-17',
    checkOut:'2024-01-19',
    guestCount:2,
    booking:'Confirmed',
    bill:'$360'
  },
]

export const searchedRoomData = [
  {
    type:'Standard Room',
    rating:4.2,
    maxMember:2,
    price:'120'
  },
  {
    type:'Deluxe Room',
    rating:4.5,
    maxMember:3,
    price:'180'
  },
  {
    type:'Executive Suite',
    rating:4.8,
    maxMember:4,
    price:'350'
  },
]