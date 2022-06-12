import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  age: number;
  address: string;
  email: string;
  phone: string;
  constructor() {
    // todo calculate
    this.age = 22;
    this.address = 'Željeznička 26, Pejton, Ilidža, Sarajevo';
    this.email = 'adnasalkovic@hotmail.com';
    this.phone = '+38762574737';
  }

  ngOnInit() {
  }



}
