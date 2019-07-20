import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: 'app.component.html',
    styles: [ `.red{color:red;}`],
    styleUrls: ['app.component.css']
}) 
export class AppComponent {

    rows: number = 10;
    boolId: boolean = true;
    boolName: boolean = true;
    boolPrice: boolean = true;

    Products = Products.splice(0, this.rows);

    deleteElement(index, id){
        this.Products.splice(index, 1);
        console.log(id);
    }

    forId(){
        this.boolId = true;
        this.boolName = false;
        this.boolPrice = false;
    }

    forName(){
        this.boolName = true;
        this.boolId = false;
        this.boolPrice = false;
    }

    forPrice(){
        this.boolPrice = true;
        this.boolName = false;
        this.boolId = false;
    }

    showAll(){
        this.boolPrice = true;
        this.boolName = true;
        this.boolId = true;
    }

    id: number = 11;
    name: string = 'product 11';
    price: number = 1100;

    addNewElem(){
        this.Products.push({id: this.id, name: this.name, price: this.price});
        this.id = null;
        this.name = '';
        this.price = null;
    }
}

let Products = [{ id: 1, name : "product 1", price : 900 },
        { id: 2, name : "product 2", price : 100 },
        { id: 3, name : "product 3", price : 700 },
        { id: 4, name : "product 4", price : 400 },
        { id: 5, name : "product 5", price : 500 },
        { id: 6, name : "product 6", price : 800 },
        { id: 7, name : "product 7", price : 300 },
        { id: 8, name : "product 8", price : 600 },
        { id: 9, name : "product 9", price : 1000 },
        { id: 10, name : "product 10", price : 200 }];

