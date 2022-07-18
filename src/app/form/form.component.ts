import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:{
    name:string,
    occupation:string,
    email:string,
    subject:string,
    content:string
  }
@ViewChild('form')
form!:NgForm;

  constructor() {
    this.user = {
      name:'',
      occupation:'',
      email:'',
      subject:'',
      content:''
    }
  }


  ngOnInit(): void {
  }

  onSubmitForm():void{
    console.log('Enviando información...')
    console.log(this.user);
    console.log(this.form.value);
  }

}
