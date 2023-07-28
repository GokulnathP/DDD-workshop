import {Account} from "./account";
import {Address} from "./address";

export class Customer {
  accounts: Account[]
  address: Address;

  updateAddress(address: Address){
    this.address = address;
    this.accounts.forEach((account) => account.updateAddress(address))
  }
}
