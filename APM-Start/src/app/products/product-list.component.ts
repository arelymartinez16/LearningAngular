import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

// this makes the class a component
@Component({
    templateUrl: "./product-list-component.html",
    styleUrls: ["./product-list-component.css"]
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = "";
    sub!: Subscription;
    // listFilter: string = "cart";
    private _listFilter: string = "";
    // getter and setter for listFilter
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log("In setter: ", value);
        this.filteredProducts = this.performFilter(value)
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {

    }

    // methods are placed below the properties
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    // component initialization
    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        // this.listFilter = "cart";
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy))
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message
    }
}