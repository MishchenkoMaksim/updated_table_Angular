"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.rows = 10;
        this.boolId = true;
        this.boolName = true;
        this.boolPrice = true;
        this.Products = Products.splice(0, this.rows);
        this.id = 11;
        this.name = 'product 11';
        this.price = 1100;
    }
    AppComponent.prototype.deleteElement = function (index, id) {
        this.Products.splice(index, 1);
        console.log(id);
    };
    AppComponent.prototype.forId = function () {
        this.boolId = true;
        this.boolName = false;
        this.boolPrice = false;
    };
    AppComponent.prototype.forName = function () {
        this.boolName = true;
        this.boolId = false;
        this.boolPrice = false;
    };
    AppComponent.prototype.forPrice = function () {
        this.boolPrice = true;
        this.boolName = false;
        this.boolId = false;
    };
    AppComponent.prototype.showAll = function () {
        this.boolPrice = true;
        this.boolName = true;
        this.boolId = true;
    };
    AppComponent.prototype.addNewElem = function () {
        this.Products.push({ id: this.id, name: this.name, price: this.price });
        this.id = null;
        this.name = '';
        this.price = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: 'app.component.html',
            styles: [".red{color:red;}"],
            styleUrls: ['app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Products = [{ id: 1, name: "product 1", price: 900 },
    { id: 2, name: "product 2", price: 100 },
    { id: 3, name: "product 3", price: 700 },
    { id: 4, name: "product 4", price: 400 },
    { id: 5, name: "product 5", price: 500 },
    { id: 6, name: "product 6", price: 800 },
    { id: 7, name: "product 7", price: 300 },
    { id: 8, name: "product 8", price: 600 },
    { id: 9, name: "product 9", price: 1000 },
    { id: 10, name: "product 10", price: 200 }];
//# sourceMappingURL=app.component.js.map