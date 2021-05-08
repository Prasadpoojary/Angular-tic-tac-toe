import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() 
  itemName: string='';

  faTimes=faTimes
  faCircle=faCircle
  faEdit=faEdit
  
  constructor() { }

  ngOnInit(): void {
  }

}
