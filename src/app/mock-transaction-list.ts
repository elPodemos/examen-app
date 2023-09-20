import { Transaction } from './transaction.interface';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        labelle: 'Dons',
        montant: 100,
        categorie: "Entrée",
        date: new Date("2023-09-01")
    },
    {
        id: 2,
        labelle: 'Course',
        montant: 50,
        categorie: "Dépense",
        date: new Date("2023-09-05")
    },
    {
        id: 3,
        labelle: 'Marché',
        montant: 25,
        categorie: "Entrée",
        date: new Date("2023-09-10")
    },
    {
        id: 4,
        labelle: 'Marché',
        montant: 250,
        categorie: "Entrée",
        date: new Date("2023-09-15")
    }
];