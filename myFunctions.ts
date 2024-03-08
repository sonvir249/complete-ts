function addTwo(num: number): number {
  return num + 2;
}
addTwo(2);

function getUpper(val: string): string {
  return val.toUpperCase();
}
getUpper("test");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("1", "2", true);

const loginUser = (email: string, name: string, isPaid: boolean = false) => {

}
loginUser("a@gmail.com", "abc");

function getValue(myVal: number): number | string {
  if (myVal > 1) {
    return myVal;
  }
  return "ok"
}
getValue(12);

const getHello = (s: string): string => {
  return "Hello " + s;
}
getHello("hello");

const heros = ["thor", "iron man", "superman" ];
// const heros = [1, 2, 3, 4, 5, 6, 7, 8];

heros.map((hero): string => {
  return `Hero is ${hero}`;
})


function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}

function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

consoleError("sdfdadad");
consoleError("sdfdadad");



export { };
