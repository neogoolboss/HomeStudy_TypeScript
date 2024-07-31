let exFirstName :string[] = ["KIM", "PARK"];
let exFitstName2 :{name? : string} = {name : "KIM"};

let exFirstName3 :string | number = 123;

type MyType = string | number;
let exFirstName4 :MyType = 123;

type Member = [number, boolean];
let john:Member = [1, false];