import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
import { DataTable } from '../../../models/DataTable';

@Component({
  selector: 'app-product-release-mapping',
  templateUrl: './product-release-mapping.component.html',
  styleUrls: ['./product-release-mapping.component.scss']
})
export class ProductReleaseMappingComponent implements OnInit {
  
  title = ['Param Name(^v)','Actions'];
  rows = [[1,'"<app-icon type="edit"></app-icon>"'],[3,'<app-icon type="edit"></app-icon>']];
  dataTable = new DataTable();
  
  public products : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.dataTable.rows=this.rows;
    this.dataTable.titles=this.title;
    
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
