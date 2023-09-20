import { Injectable } from '@angular/core';
import { TRANSACTIONS } from './mock-transaction-list';
import { Transaction } from './transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }


  fetchAll(){
    return TRANSACTIONS;
  }

  fetchById(i:number){
    return TRANSACTIONS[i-1];
  }

  add(transaction:Transaction){
    transaction.id = TRANSACTIONS.length + 1;
    transaction.date = new Date();
    TRANSACTIONS.push(transaction);
  }

}
