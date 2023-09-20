import { Transaction } from './transaction.interface';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        labelle: 'Dons',
        montant: 100,
        categorie: "Entrée",
        date: new Date()
    },
    {
        id: 2,
        labelle: 'Course',
        montant: 50,
        categorie: "Dépense",
        date: new Date()
    },
    {
        id: 3,
        labelle: 'Marché',
        montant: 25,
        categorie: "Entrée",
        date: new Date()
    }
];