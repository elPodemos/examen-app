import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Transaction } from '../transaction.interface';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(
    private service:TransactionService,
  ){}

  chart: any;
  transactionList: Transaction[] = [];

  ngOnInit(): void {
    this.getTransaction();
    this.createChart();
  }

  getTransaction(){
    this.transactionList = this.service.fetchAll();
    return this.transactionList;
  }

  createChart(){
    let date = this.transactionList.map((word) => word.date.toLocaleDateString("fr"));
    let solde: number = 100;
    let soldeList: number[] = [];

    const skipped = (ctx:any, value:any) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    const down = (ctx:any, value:any) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

    this.transactionList.forEach(transaction => {
      if(transaction.categorie === "Entrée"){
        solde += transaction.montant;
      }else{
        solde -= transaction.montant;
      }
      soldeList.push(solde);
    });

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: date, 
	        datasets: [{
            label: "Solde",
            data: soldeList,
            borderColor: 'rgb(75, 192, 192)',
            segment: {
              borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
              borderDash: ctx => skipped(ctx, [6, 6]),
            },
            spanGaps: true
          }]
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
      }
      
    });
  }

}
