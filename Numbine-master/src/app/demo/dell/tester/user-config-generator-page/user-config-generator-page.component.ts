
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { ButtonClass } from 'src/app/demo/enums/myenum.enum';
import { Parameter } from '../../models/Parameter';
import { ParameterService } from '../../services/ParameterService/parameter.service';
import { ProductService } from '../../services/ProductService/product.service';



@Component({
  selector: 'app-user-config-generator-page',
  templateUrl: './user-config-generator-page.component.html',
  styleUrls: ['./user-config-generator-page.component.scss']
})



export class UserConfigGeneratorPageComponent implements OnInit {
  public products : Product[] = [];
  public params : Parameter[] = [];
buttonClass = ButtonClass;


  
  constructor(private productService : ProductService, private paramService : ParameterService) { }

  ngOnInit(): void {
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
