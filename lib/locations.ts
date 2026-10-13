export const SA_PROVINCES = [
  { id: 'kwazulu-natal', slug: 'kwazulu-natal', name: 'KwaZulu-Natal', code: 'KZN', towns: ['Durban', 'Pietermaritzburg', 'Richards Bay', 'Empangeni', 'Newcastle', 'Port Shepstone', 'Ladysmith', 'Amanzimtoti', 'Ballito', 'Umhlanga'] },
  { id: 'gauteng', slug: 'gauteng', name: 'Gauteng', code: 'GP', towns: ['Johannesburg', 'Pretoria', 'Sandton', 'Randburg', 'Midrand', 'Centurion', 'Soweto', 'Roodepoort', 'Germiston', 'Benoni'] },
  { id: 'western-cape', slug: 'western-cape', name: 'Western Cape', code: 'WC', towns: ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Worcester', 'Somerset West', 'Bellville', 'Hermanus', 'Knysna', 'Mossel Bay'] },
  { id: 'eastern-cape', slug: 'eastern-cape', name: 'Eastern Cape', code: 'EC', towns: ['Gqeberha (Port Elizabeth)', 'East London', 'Mthatha', 'Uitenhage', 'Grahamstown', 'Queenstown', 'King William\'s Town'] },
  { id: 'free-state', slug: 'free-state', name: 'Free State', code: 'FS', towns: ['Bloemfontein', 'Welkom', 'Sasolburg', 'Bethlehem', 'Kroonstad', 'Parys'] },
  { id: 'limpopo', slug: 'limpopo', name: 'Limpopo', code: 'LP', towns: ['Polokwane (Pietersburg)', 'Tzaneen', 'Thohoyandou', 'Modimolle', 'Bela-Bela', 'Phalaborwa'] },
  { id: 'mpumalanga', slug: 'mpumalanga', name: 'Mpumalanga', code: 'MP', towns: ['Nelspruit (Mbombela)', 'Witbank (Emalahleni)', 'Secunda', 'Middelburg', 'Barberton', 'White River'] },
  { id: 'north-west', slug: 'north-west', name: 'North West', code: 'NW', towns: ['Rustenburg', 'Mahikeng (Mafikeng)', 'Potchefstroom', 'Klerksdorp', 'Brits', 'Hartebeespoort'] },
  { id: 'northern-cape', slug: 'northern-cape', name: 'Northern Cape', code: 'NC', towns: ['Kimberley', 'Upington', 'Springbok', 'De Aar', 'Kuruman', 'Colesberg'] }
];

export const TOTAL_SUBURBS_COUNT = 4500;
export const TOTAL_MAJOR_TOWNS_COUNT = 320;

export const TOWN_POSTAL_CODES: Record<string, string> = {
  "Durban": "4001",
  "Johannesburg": "2001",
  "Pretoria": "0001",
  "Cape Town": "8001",
  "Sandton": "2196",
  "Gqeberha (Port Elizabeth)": "6001",
  "Bloemfontein": "9301",
  "Polokwane (Pietersburg)": "0699",
  "Nelspruit (Mbombela)": "1200",
  "Rustenburg": "0300",
  "Kimberley": "8301"
};

export const KZN_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Durban": [
    { name: "Morningside", postalCode: "4001" },
    { name: "Berea", postalCode: "4001" },
    { name: "Durban Central", postalCode: "4001" },
    { name: "Glenwood", postalCode: "4001" },
    { name: "Durban North", postalCode: "4051" },
    { name: "Musgrave", postalCode: "4001" },
    { name: "Overport", postalCode: "4067" }
  ],
  "Umhlanga": [
    { name: "Umhlanga Rocks", postalCode: "4320" },
    { name: "Umhlanga Ridge", postalCode: "4319" },
    { name: "La Lucia", postalCode: "4051" },
    { name: "Dolphin Coast", postalCode: "4420" }
  ],
  "Amanzimtoti": [
    { name: "Kingsburgh", postalCode: "4126" },
    { name: "Illovo Beach", postalCode: "4126" },
    { name: "Warner Beach", postalCode: "4140" },
    { name: "Doonside", postalCode: "4135" }
  ],
  "Pietermaritzburg": [
    { name: "CBD", postalCode: "3201" },
    { name: "Scottsville", postalCode: "3201" },
    { name: "Hayfields", postalCode: "3201" },
    { name: "Wembley", postalCode: "3201" },
    { name: "Montrose", postalCode: "3201" }
  ],
  "Richards Bay": [
    { name: "Arbor Park", postalCode: "3900" },
    { name: "Brackenham", postalCode: "3900" },
    { name: "Central Business District", postalCode: "3900" },
    { name: "Meerensee", postalCode: "3901" }
  ]
};

export const GAUTENG_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Johannesburg": [
    { name: "Sandton", postalCode: "2196" },
    { name: "Rosebank", postalCode: "2196" },
    { name: "Braamfontein", postalCode: "2001" },
    { name: "Randburg", postalCode: "2194" },
    { name: "Fourways", postalCode: "2055" },
    { name: "Midrand", postalCode: "1685" },
    { name: "Melville", postalCode: "2092" },
    { name: "Parktown", postalCode: "2193" }
  ],
  "Pretoria": [
    { name: "Arcadia", postalCode: "0083" },
    { name: "Hatfield", postalCode: "0083" },
    { name: "Brooklyn", postalCode: "0181" },
    { name: "Menlyn", postalCode: "0181" },
    { name: "Centurion", postalCode: "0157" },
    { name: "Sunnyside", postalCode: "0002" }
  ],
  "Soweto": [
    { name: "Orlando", postalCode: "1804" },
    { name: "Diepkloof", postalCode: "1862" },
    { name: "Dobsonville", postalCode: "1863" },
    { name: "Chiawelo", postalCode: "1818" },
    { name: "Pimville", postalCode: "1808" }
  ]
};

export const WESTERN_CAPE_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Cape Town": [
    { name: "City Bowl", postalCode: "8001" },
    { name: "Sea Point", postalCode: "8005" },
    { name: "Green Point", postalCode: "8001" },
    { name: "Camps Bay", postalCode: "8005" },
    { name: "Claremont", postalCode: "7700" },
    { name: "Rondebosch", postalCode: "7700" },
    { name: "Woodstock", postalCode: "7925" },
    { name: "Constantia", postalCode: "7806" }
  ],
  "Stellenbosch": [
    { name: "Central", postalCode: "7600" },
    { name: "Technopark", postalCode: "7600" },
    { name: "Dalsig", postalCode: "7600" },
    { name: "Die Boord", postalCode: "7600" },
    { name: "Idas Valley", postalCode: "7600" }
  ],
  "George": [
    { name: "Central", postalCode: "6529" },
    { name: "Heatherlands", postalCode: "6529" },
    { name: "Blanco", postalCode: "6530" },
    { name: "Pacaltsdorp", postalCode: "6534" }
  ]
};

export const EASTERN_CAPE_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Gqeberha (Port Elizabeth)": [
    { name: "Central", postalCode: "6001" },
    { name: "Summerstrand", postalCode: "6001" },
    { name: "Walmer", postalCode: "6065" },
    { name: "Newton Park", postalCode: "6045" },
    { name: "Lorraine", postalCode: "6070" }
  ],
  "East London": [
    { name: "CBD", postalCode: "5201" },
    { name: "Beacon Bay", postalCode: "5241" },
    { name: "Nahoon", postalCode: "5241" },
    { name: "Selborne", postalCode: "5201" },
    { name: "Vincent", postalCode: "5247" }
  ]
};

export const FREE_STATE_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Bloemfontein": [
    { name: "Central", postalCode: "9301" },
    { name: "Westdene", postalCode: "9301" },
    { name: "Universitas", postalCode: "9321" },
    { name: "Brandwag", postalCode: "9301" },
    { name: "Dan Pienaar", postalCode: "9301" }
  ]
};

export const LIMPOPO_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Polokwane (Pietersburg)": [
    { name: "Central", postalCode: "0699" },
    { name: "Bendor", postalCode: "0699" },
    { name: "Flora Park", postalCode: "0699" },
    { name: "Annadale", postalCode: "0699" }
  ]
};

export const MPUMALANGA_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Nelspruit (Mbombela)": [
    { name: "Central", postalCode: "1200" },
    { name: "Sonheuwel", postalCode: "1200" },
    { name: "Nelspruit Ext", postalCode: "1200" },
    { name: "West Acres", postalCode: "1200" }
  ]
};

export const NORTH_WEST_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Rustenburg": [
    { name: "Central", postalCode: "0300" },
    { name: "Cashan", postalCode: "0300" },
    { name: "Bo Dorp", postalCode: "0300" },
    { name: "Geelhoutpark", postalCode: "0300" }
  ]
};

export const NORTHERN_CAPE_SUBURBS: Record<string, Array<{ name: string; postalCode: string }>> = {
  "Kimberley": [
    { name: "Central", postalCode: "8301" },
    { name: "Beaconsfield", postalCode: "8301" },
    { name: "Hadison Park", postalCode: "8301" },
    { name: "Monument Heights", postalCode: "8301" }
  ]
};

export const ALL_SUBURB_MAPS: Record<string, Record<string, Array<{ name: string; postalCode: string }>>> = {
  "kwazulu-natal": KZN_SUBURBS,
  "gauteng": GAUTENG_SUBURBS,
  "western-cape": WESTERN_CAPE_SUBURBS,
  "eastern-cape": EASTERN_CAPE_SUBURBS,
  "free-state": FREE_STATE_SUBURBS,
  "limpopo": LIMPOPO_SUBURBS,
  "mpumalanga": MPUMALANGA_SUBURBS,
  "north-west": NORTH_WEST_SUBURBS,
  "northern-cape": NORTHERN_CAPE_SUBURBS
};

export function getPostalCodeForTown(town: string): string {
  return TOWN_POSTAL_CODES[town] || "2000";
}

export function findSuburbAndTown(province?: string, address?: string, city?: string): { suburb?: string; town?: string; province?: string } {
  return { suburb: address || "Central", town: city || "Johannesburg", province: province || "Gauteng" };
}
