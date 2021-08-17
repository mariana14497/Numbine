import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameter } from '../../models/Parameter';
import { Product } from '../../models/Product';
import { Value } from '../../models/Value';
import { WebServiseService } from '../WebService/web-service.service';
@Injectable({
  providedIn: 'root'
})
export class ParameterService
{
  parameters: Parameter[];
  constructor(private webService : WebServiseService) 
  {
    this.parameters = this.generateDummyParams();
  }



  private generateDummyParams() : Parameter[]
  {
    const ramValue1 = new Value(1, "4GB");
    const ramValue2 = new Value(2, "8GB");
    const ramValue3 = new Value(3, "16GB");
    const ramValues: Value[] = [ramValue1, ramValue2, ramValue3];

    const parameter1 = new Parameter(1, "RAM", "The memory of the computer.", ramValues, [new Product(1, "A", true, null)]);
    const gpuValue1 = new Value(4, "GTX 1050");
    const gpuValue2 = new Value(5, "GTX 3070");
    const gpuValue3 = new Value(6, "GTX 3090");
    const gpuValue4 = new Value(6, "None");
    const gpuValues: Value[] = [gpuValue1, gpuValue2, gpuValue3, gpuValue4];
    const parameter2 = new Parameter(2, "GPU", "The graphics processing unit.", gpuValues,
      [new Product(2, "B", true, null), new Product(1, "A", true, null)]);
    let parameters = [parameter1, parameter2];
    return parameters;
  }

  public getDummyParameters(): Observable<Parameter[]>
  {
    let obs = new Observable<Parameter[]>(observer => 
    {
      try
      {
        setTimeout(() =>
        {
          observer.next(this.parameters);
        }, 500);

      } catch (error)
      {
        observer.error(error);
      }
    });
    return obs;
  }
  public getDummyParamsById(productId: number): Observable<Parameter[]>
  {
    let allParams = this.generateDummyParams();
    let obs = new Observable<Parameter[]>(observer => 
    {
      setTimeout(() =>
      {
        let paramsById: Parameter[] = [];
        try
        {
          allParams.forEach(element =>
          {
            element.products.forEach(product =>
            {
              // console.log("product=" + product.id + " - Id=" + productId);
              if (product.id == productId)
              {
                // console.log("Match, added " + product.toString());
                paramsById.push(element);
              }
            });

          });
          observer.next(paramsById);
        }
        catch (error)
        {
          observer.error(error);
        }
      }, 500);
    });
    return obs;
  }
  public getParametersAsync(): Observable<Parameter[]>
  {
    return  this.webService.callService<Parameter[]>("Parameter/getAllParameters",);
   }
  // public deleteParameter(){

  //   const deleteParamter=   ParameterService.getPath+"/deleteParam/deleteParam";
  //   return this.httpClient.delete(deleteParamter);
    
  //   }
    


}
