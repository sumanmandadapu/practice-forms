import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm }  from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild("signInForm", { static: true })
  signInform: NgForm;
  defaultQuestion="color";
  answer='';

  genders :string[] = ['Male','Female'];

   user = {
        username: '',
        email: '',
        secret: '',
        questionanswer: '',
        gender: ''
    };
    submitted =false;

  ngOnInit() {}

  onClickSet(){
    const suggestName="Suman";

    this.signInform.setValue({
      userDatagroup : {
        username: 'asdasd',
        email: "suman.mandadapu@gmail.com"
      },
      secret:"color",
      questionanswer:"black",
      gender:"Female"
    });
    this.submitted=false;
  }

  onClickPatch(){
    const suggestName="Suggested User";

    this.signInform.form.patchValue({
      userDatagroup : {
        username: "Suman Mandadapu",
      },
      secret:"city",
      questionanswer:"KMM",
      gender:"Male"
    });
    this.submitted=false;
  }

  onResetForm(){
    this.signInform.resetForm();
    this.submitted=false;
  }
  
  onResetFormValue(){
    this.signInform.setValue({
      userDatagroup:{username :'',email:''},
      secret:'',
      questionanswer:'',
      gender:''
        });
    this.submitted=false;
  }

  onSubmit(form:NgForm) {
    this.submitted=true;
    console.log(this.signInform);
    this.user.username=this.signInform.value.userDatagroup.username;
    this.user.email=this.signInform.value.userDatagroup.email;
    this.user.secret=this.signInform.value.secret;
    this.user.questionanswer=this.signInform.value.questionanswer;
    this.user.gender=this.signInform.value.gender;

  }

}