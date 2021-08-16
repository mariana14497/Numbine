import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
@Component({
  selector: 'app-product-release-mapping',
  templateUrl: './product-release-mapping.component.html',
  styleUrls: ['./product-release-mapping.component.scss']
})
export class ProductReleaseMappingComponent implements OnInit {
  
  public products : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    let obs = this.productService.getDummyProducts();
    obs.subscribe(products => {
      this.products = products;
      // Add loading?
    }, error =>
    {
      alert("Error in loading products, product-release-mapping.component.ts");
    });
  }

}
