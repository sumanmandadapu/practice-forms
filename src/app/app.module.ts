import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


import {AppRouting} from './routing-module.service';
import { AssignmentFormsComponent } from './assignment-forms/assignment-forms.component'

@NgModule({
  imports:[BrowserModule,ReactiveFormsModule, FormsModule ,AppRouting],
  declarations: [AppComponent, HelloComponent, ReactiveFormComponent, TemplateFormComponent, AssignmentFormsComponent],
  bootstrap:[AppComponent]
})

export class AppModule { }
