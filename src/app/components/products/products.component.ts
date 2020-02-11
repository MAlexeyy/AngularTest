import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/Product";
import { Title } from "@angular/platform-browser";
import { log } from "util";
import { ProductsService } from "src/app/products.service";
import { Company } from 'src/app/model/Company';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public companys: Company[];

  public constructor(
    private title: Title,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.title.setTitle("Our Products");
    console.log("START");

    // Synchronous call
    //this.products =this.productsService.getAllProducts();

    // Asynchronous call using callback
    //this.productsService.getAllProductsAsync1((products)=>{this.products=products}, ()=>console.log('fail'));

    // Asynchronic call using promise
    //   this.productsService.getAllProductsAsync2().then(
    //     (products) => this.products=products,
    //     (err) => console.error(err)
    // );;

    // Asynchronic call using obserbable
    //USE IT IN PROJECT.
    // this.productsService.getAllProductsAsync3().subscribe(
    //   (products)=>{this.products=products},
    //   (error)=>{console.log('Fail...')} );

    // Asynchronic call using obserbable with external JSON
    // this.productsService.getAllProductsAsync4().subscribe(
    //   products => {
    //     this.products = products;
    //   },
    //   () => {}
    // );


    this.productsService.getAllProductsAsync5().subscribe(
      companys => {
        this.companys = companys;
      },
      () => {}
    );

    console.log("END");
  }
}
