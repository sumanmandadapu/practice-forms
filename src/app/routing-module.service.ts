import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {AssignmentFormsComponent} from './assignment-forms/assignment-forms.component';




const appRoutes : Routes=[
  {path: '',component:TemplateFormComponent},
  {path: 'template',component:TemplateFormComponent},
  {path: 'reactive',component:ReactiveFormComponent},
  {path :'assignment',component:AssignmentFormsComponent}

];

@NgModule({
  imports:[ 
    RouterModule.forRoot(appRoutes) ],
  exports:[
      RouterModule
  ]
})


export class AppRouting{


}