export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairData;
  ip: string;
  address: AddressData;
  macAddress: string;
  university: string;
  bank: BankData;
  company: CompanyData;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoData;
  role: string;
}

interface HairData {
  color: string;
  type: string;
}

interface AddressData {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

interface BankData {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface CompanyData {
  department: string;
  name: string;
  title: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
}

interface CryptoData {
  coin: string;
  wallet: string;
  network: string;
}
