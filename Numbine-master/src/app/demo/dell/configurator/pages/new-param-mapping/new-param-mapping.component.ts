import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
import { DataTable } from '../../../models/DataTable';
import { Value } from '../../../models/Value';

@Component({
  selector: 'app-new-param-mapping',
  templateUrl: './new-param-mapping.component.html',
  styleUrls: ['./new-param-mapping.component.scss']
})
export class NewParamMappingComponent implements OnInit {

  title = ['Value','Start Release','End Release'];
  rows = [[1,'"<app-icon type="edit"></app-icon>"',2],[3,'<app-icon type="edit"></app-icon>',4]];
  dataTable = new DataTable();
  
  public parameters : Parameter[] = [];
  public currentparameters : Parameter ;

  constructor(private parameterService : ParameterService) { }

  ngOnInit(): void {
    this.dataTable.rows=this.rows;
    this.dataTable.titles=this.title;
    
    let obs = this.parameterService.getDummyParameters();
    obs.subscribe(parameters => {
      this.parameters = parameters;
      // Add loading?
    }, error =>
    {
      alert("Error in loading parameters, new-param-mapping.component.ts");
    });
  }
  updateValues(currentParameter: Parameter)
  {
    if (currentParameter != null)
    {
      this.currentparameters=currentParameter;
      this.updateRows();
      // let obsValues = this.parameterService.getDummyParamsById(currentParameter.id);
      // obsValues.subscribe(params =>
      // {
      //   this.parameters = params;
      //   this.updateRows();
      //   // Add loading?
      // }, error =>
      // {
      //   alert("Error in loading params, product-release-mapping.component.ts " + error);
      // });
    }
  }
  updateRows()
  {
    let Values=this.currentparameters.values;
    this.rows.length = 0;
    Values.forEach(element =>
    {
      this.rows.push([element.name]);
    });
  }

}

