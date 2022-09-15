import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from './model/model.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { RouterModule } from "@angular/router";
import {  HttpClientModule } from '@angular/common/http'
import { DataService } from './service/data.service';
import { SiblingComponent } from './sibling/sibling.component';
import { BindingComponent } from './binding/binding.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    UserdataComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    SiblingComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
   HttpClientModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
