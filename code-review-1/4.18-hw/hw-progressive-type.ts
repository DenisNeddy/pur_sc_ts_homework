import axios from 'axios';

const url = 'https://dummyjson.com/users';

enum Gender {
  male = 'male',
  female = 'female'

}

interface IUserAddress {
    address: string,
    city: string,
    coordinates: {
      lat: number,
      ing: number
    },
    country: string,
    postalCode: string,
    state: string,
    stateCode: string
}

interface IUserBank {
  cardExprire: string,
  cardNumber: string,
  cardType: string,
  currency: string,
  iban: string
}

interface IUserCompany {
    department: string,
    name: string,
    title: string,
}

interface IUserCrypto {
    coin: string,
    network: string,
    wallet: string
}

interface IUser {
  address: IUserAddress, 
  age: number,
  bank: IUserBank,
  birthDate: string,
  bloodGroup: string,
  company: IUserCompany,
  crypto: IUserCrypto,
  ein: string,
  email: string,
  eyeColor: string,
  firstName: string,
  gender: Gender,
  hair: {
    color: string,
    type: string
  },
  height: number,
  id: number,
  image: string,
  lastName: string,
  macAddress: string,
  maidenName: string,
  password: string,
  phone: string,
  role: string,
  ssn: string,
  university: string,
  userAgent: string,
  username: string,
  weight: number
 
}

interface IData {
  users: IUser[]
}

type ResponceStatus = IUser[] | undefined;
 
function assertIUser(users: ResponceStatus): ResponceStatus {
  if(typeof users !== 'undefined') {
    return users;
  }
  console.error('Пользователи не найдены'); 
}

async function getUser(url: string): Promise<ResponceStatus> {
    try {
      const response = await axios.get<IData>(url);
      const result: IUser[] = response.data.users;
      
      return assertIUser(result);
 
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  }

getUser(url)
