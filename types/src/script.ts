//string
//  Tipando a variável nome como string --> variável: type
let nome: string = 'Henry';

//number
//  Type 'number' is not assignable to type 'string'.
//  let name2: string = 90;

//  Forma correta
let age: number = 18;

//boolean
let  dev: boolean = true;

//arrays
//  Array de Strings --> string[]
let nomes: string[] = ['Henry', 'Kauã', 'Ana luiza'];
//  Array de Numbers --> number[]
let numbers: number[] = [1, 2, 4];
let numbers1: Array<number> = [1, 2, 4];

//any
//Exclusivo para TS -- Último caso
//  Se eu preciso adicionar um number no array de strings não vai aceitar
//      let names: string[] = ['Henry', 'Ana Luiza', 'Kauã'];
//  Any resolve esses problemas: Ele vai parar de verificar a Tipagem
let names: any = ['Henry', 'Ana Luiza', 'Kauã'];
names.push(18);
