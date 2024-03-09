const User = {
  name: "Sonvir",
  email: "sonvir@gmail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}) {}
let newUser = {name: "Sonvir", isPaid: true, email: "sonvir@gmail.com"}
createUser(newUser);

function course():{name: string, isPaid: boolean} {
  return {name: "Sonvir", isPaid: false}
}
course();

type User = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  ccDetails?: number
}

let myUser: User = {
  _id: "122",
  name: "Sonvir",
  email: "sonvir@gmail.com",
  isActive: true
}

type cardNumber = {
  cardNumber: string
}

type cardCVV = {
  cardCVV: string
}

type cardDate = {
  cardNumber: string
}

type cardDetails = cardNumber & cardCVV & cardDate & {
  expireDate: string
}

function getCardDetails(cardData: cardDetails): cardDetails {
  return cardData;
}

export { };
