const offers = [
  {
    id: 0,
    img: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    premium: true,
    active: false,
    rating: '100%',
    isFavorite: true,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Amsterdam',
  },
  {
    id: 1,
    img: 'img/apartment-01.jpg',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    premium: true,
    active: false,
    rating: '100%',
    isFavorite: true,
    location: {latitude: 52.369553943508, longitude: 4.85309666406198},
    city: 'Amsterdam',
  },
  {
    id: 2,
    img: 'img/room.jpg',
    name: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    premium: false,
    active: false,
    rating: '80%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.929309666406198},
    city: 'Amsterdam',
  },
  {
    id: 3,
    img: 'img/apartment-02.jpg',
    name: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    premium: false,
    active: false,
    rating: '100%',
    isFavorite: false,
    location: {latitude: 52.3809553943508, longitude: 4.939309666406198},
    city: 'Amsterdam',
  },
  {
    id: 4,
    img: 'img/room.jpg',
    name: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Amsterdam',
  },
  {
    id: 5,
    img: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    price: 190,
    type: 'Apartment',
    premium: true,
    active: false,
    rating: '100%',
    isFavorite: true,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Paris',
  },
  {
    id: 6,
    img: 'img/apartment-01.jpg',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 110,
    type: 'Apartment',
    premium: true,
    active: false,
    rating: '100%',
    isFavorite: true,
    location: {latitude: 52.369553943508, longitude: 4.85309666406198},
    city: 'Paris',
  },
  {
    id: 7,
    img: 'img/room.jpg',
    name: 'Bon apetit',
    price: 150,
    type: 'Private room',
    premium: false,
    active: false,
    rating: '80%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.929309666406198},
    city: 'Amsterdam',
  },
  {
    id: 8,
    img: 'img/apartment-02.jpg',
    name: 'Canal la Cena',
    price: 320,
    type: 'Apartment',
    premium: false,
    active: false,
    rating: '100%',
    isFavorite: false,
    location: {latitude: 52.3809553943508, longitude: 4.939309666406198},
    city: 'Paris',
  },
  {
    id: 9,
    img: 'img/room.jpg',
    name: 'Notre Dame',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Paris',
  },
  {
    id: 10,
    img: 'img/room.jpg',
    name: 'Cologne center',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Cologne',
  },
  {
    id: 11,
    img: 'img/room.jpg',
    name: 'Teatre station',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Cologne',
  },
  {
    id: 12,
    img: 'img/room.jpg',
    name: 'House of stability',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Cologne',
  },
  {
    id: 13,
    img: 'img/room.jpg',
    name: 'House of stability',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Brussels',
  },
  {
    id: 14,
    img: 'img/room.jpg',
    name: 'Banks square',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Brussels',
  },
  {
    id: 15,
    img: 'img/room.jpg',
    name: 'River home',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Brussels',
  },
  {
    id: 16,
    img: 'img/room.jpg',
    name: 'Wooden district',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Brussels',
  },
  {
    id: 17,
    img: 'img/room.jpg',
    name: 'Ripperbahn',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Hamburg',
  },
  {
    id: 18,
    img: 'img/room.jpg',
    name: 'Ripperbahn Center',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Hamburg',
  },
  {
    id: 19,
    img: 'img/room.jpg',
    name: 'Central square',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Hamburg',
  },
  {
    id: 20,
    img: 'img/room.jpg',
    name: 'Music house',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Hamburg',
  },
  {
    id: 21,
    img: 'img/room.jpg',
    name: 'St.Patrick hostel',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Hamburg',
  },
  {
    id: 22,
    img: 'img/room.jpg',
    name: 'Dusseldorf voices',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
  {
    id: 23,
    img: 'img/room.jpg',
    name: 'Center of Culture',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
  {
    id: 24,
    img: 'img/room.jpg',
    name: 'Storytown',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
  {
    id: 25,
    img: 'img/room.jpg',
    name: 'Beerhouse',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
  {
    id: 26,
    img: 'img/room.jpg',
    name: 'Crossroads Inn',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
  {
    id: 27,
    img: 'img/room.jpg',
    name: 'Fortuna Stadium',
    price: 130,
    type: 'Private room',
    premium: false,
    active: true,
    rating: '70%',
    isFavorite: false,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: 'Dusseldorf',
  },
];

export default offers;
