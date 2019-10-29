import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  
  @ViewChild("signInForm", { static: true })
  signInform: NgForm;
  defaultQuestion="color";
  answer='';

  genders :string[] = ['Male','Female'];

   user = {
        username:'',
        email: '',
        secret:'',
        questionanswer:'',
        gender:''
    };
    submitted =false;

  ngOnInit() {}

  onClickSet(){
    const suggestName="Suman";

    this.signInform.setValue({
      userDatagroup : {
        username: suggestName,
        email: "suman.mandadapu@gmail.com"
      },
      secret:"color",
      questionanswer:"black",
      gender:"Female"
    });
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
  }

  onResetForm(){

  }
  onResetFormValue(){

  }

  onSubmit(form:NgForm) {
    this.submitted=true;
    console.log(this.signInform);
    this.user.username=this.signInform.value.userDataGroup.username;
    this.user.email=this.signInform.value.userDataGroup.email;
    this.user.secret=this.signInform.value.secret;
    this.user.questionanswer=this.signInform.value.questionanswer;
    this.user.gender=this.signInform.value.gender;

  }
}
