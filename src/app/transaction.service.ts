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
    let lastTransaction = TRANSACTIONS[TRANSACTIONS.length-1];
    transaction.id = lastTransaction.id + 1;
    transaction.date = new Date();
    TRANSACTIONS.push(transaction);
  }

  delete(transaction:Transaction){
    TRANSACTIONS.splice(TRANSACTIONS.indexOf(transaction),1);
  }

}
