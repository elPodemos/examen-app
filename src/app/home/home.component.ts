import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.interface';

import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service:TransactionService,
  ){}

  transactionList: Transaction[] = [];

  budgetStart: number = 100;
  solde: number = this.budgetStart;

  ngOnInit(): void {
    this.getTransaction();
    this.getSolde();
  }

  getTransaction(){
    this.transactionList = this.service.fetchAll();
    return this.transactionList;
  }

  onSubmit(form: NgForm){
    if(form.value.labelle == '') {
      return alert("Veuillez remplir le labelle !");
    }
    if(form.value.montant == '') {
      return alert("Veuillez remplir le montant !");
    }
    if(form.value.categorie == '') {
      return alert("Veuillez renseigner la catégorie !");
    }
    this.service.add(form.value);
    this.solde = this.budgetStart;
    this.getSolde();
  }

  getSolde(){
    this.transactionList.forEach(transaction => {
      if(transaction.categorie === "Entrée"){
        this.solde += transaction.montant;
      }else{
        this.solde -= transaction.montant;
      }
    });
  }

}
