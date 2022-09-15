import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ModelComponent } from './model/model.component';
import { ParentComponent } from './parent/parent.component';
import{UserdataComponent} from './userdata/userdata.component';
import { Child2Component } from './child2/child2.component';
import {  Child3Component} from './child3/child3.component';
import {  SiblingComponent} from './sibling/sibling.component';
import {  BindingComponent} from './binding/binding.component';
const routes: Routes = [
  {path:'', redirectTo:'child2',pathMatch:'full'},
  {path:'model',component:ModelComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'child2',component:Child2Component},
  {path:'child3',component:Child3Component},
  {path:'sibling',component:SiblingComponent},
  {path:'binding',component:BindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
