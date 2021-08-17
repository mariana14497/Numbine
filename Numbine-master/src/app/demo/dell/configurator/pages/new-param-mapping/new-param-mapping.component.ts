import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
import { DataTable } from '../../../models/DataTable';

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

}

