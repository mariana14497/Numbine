import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
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
  public params : Parameter[] = [];
  constructor(private productService : ProductService, private paramService : ParameterService) { }

  ngOnInit(): void {
    this.dataTable.rows=this.rows;
    this.dataTable.titles=this.title;
    
    let obsProducts = this.productService.getDummyProducts();
    obsProducts.subscribe(products => {
      this.products = products;
      // Add loading?
    }, error =>
    {
      alert("Error in loading products, product-release-mapping.component.ts");
    });
  }
  
  updateParams(currentProduct : Product)
  {
    if(currentProduct != null)
    {
      let obsParams = this.paramService.getDummyParamsById(currentProduct.id);
      obsParams.subscribe(params => {
        this.params = params;
        console.log(this.params);
        // Add loading?
      }, error =>
      {
        alert("Error in loading params, product-release-mapping.component.ts");
      });
    }
  }

}
