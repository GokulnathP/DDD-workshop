import {Address} from "./address";

export class Account {
  constructor(private address: Address) {
  }

  updateAddress(address: Address) {
    this.address = address
  }
}

