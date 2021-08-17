import { Component, Input, OnInit } from '@angular/core';
import { ParameterService } from '../../../services/ParameterService/parameter.service';
import { Parameter } from 'src/app/demo/dell/models/Parameter';
import { DataTable } from '../../../models/DataTable';
@Component({
  selector: 'app-test-configuration',
  templateUrl: './test-configuration.component.html',
  styleUrls: ['./test-configuration.component.scss']
})
export class TestConfigurationComponent implements OnInit {
  parameters: Parameter[] = [];
  loading = false;
  titles =['Param Name','Values'];
  public rows=[[0,2],[1,1],[2,3]]
  
  dataTable= new DataTable()
  index :number[];
  constructor(private Param : ParameterService) {
    
   }

  ngOnInit(): void {
  
  //   this.loading = true;
  //  this.parameters = this.Param.getParameters();
  // for(let i = 0; i < this.rows.length; ++i){
  //  this.index[i]=i;
  //   }   
    this.dataTable.titles=this.titles;
    this.dataTable.rows=this.rows
}

deleteRow(id:number):void{ 
  for(let i = 0; i < this.rows.length; ++i){
      if (this.rows[i][0] === 0) {
          this.rows.splice(i,1);
          
      }
  }
}



}