export class Price {
  constructor(public value: number,public currency:string= "USD") {
  }
}

export class Product {
  constructor(public name: String, public price: Price) {
  }
}
