import { Component, OnInit } from "@angular/core";
import { Company } from "src/app/model/Company";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  public company: Company;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.productService.getAllProductsAsync5().subscribe(
      companys => {
        const id = +this.activateRoute.snapshot.params.id;
        this.company = companys.find(p => p.id === id);
      },
      () => {}
    );
  }
}
