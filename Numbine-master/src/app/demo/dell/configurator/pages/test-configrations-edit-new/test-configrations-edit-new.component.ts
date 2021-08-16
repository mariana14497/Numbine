import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-configrations-edit-new',
  templateUrl: './test-configrations-edit-new.component.html',
  styleUrls: ['./test-configrations-edit-new.component.scss']
})
export class TestConfigrationsEditNewComponent implements OnInit {

  public name: string;
  constructor() { }

  ngOnInit(): void {
    this.name="save";
  }

}
