import {Account} from "./account";
import {Address} from "./address";

export class Customer {
  accounts: Account[]
  address: Address;
  id: string;

  constructor() {
    this.id = (Math.random() * 1000).toString()
  }

  updateAddress(address: Address){
    this.address = address;
    this.accounts.forEach((account) => account.updateAddress(address))
  }
}
