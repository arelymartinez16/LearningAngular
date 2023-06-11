import { Component } from "@angular/core";

// this makes the class a component
@Component({
    selector: "pm-products",
    templateUrl: "./product-list-component.html"
})

export class ProductListComponent {
    pageTitle: string = "Product List";
}