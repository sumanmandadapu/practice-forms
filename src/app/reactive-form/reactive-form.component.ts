import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 genders :string[] = ['Male','Female'];
 signUpForm :FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm= new FormGroup({
      'username' :new FormControl(null,Validators.required) ,
      'email' :new FormControl(null,[Validators.required,Validators.email]) ,
      'gender' :new FormControl('Male')
    });
  }
onSubmit(){
  console.log(this.signUpForm.value);
}
  
}