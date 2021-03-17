enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  