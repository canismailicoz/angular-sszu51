import { Component } from '@angular/core';
import { OrgData } from './modules/org-chart/orgData';
import sampleData from '../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgData: OrgData = sampleData; /*{
    name: "Hello",
    type: 'User',
    children: [{
      name: "Hello1",
      type: 'User',
      children:[]
    },{
      name: "Hello2",
      type: 'User',
      children:[]
    },{
      name: "Hello3",
      type: 'User',
      children:[]
    }]
  };*/
}
