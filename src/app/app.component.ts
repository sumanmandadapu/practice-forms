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

  ngOnInit() {}

  onSubmit(form:NgForm) {
    console.log(this.signInform);
  }
}
