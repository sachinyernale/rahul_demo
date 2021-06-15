import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataRoutingModule } from './userData-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    HttpClientModule
  ]
})
export class UserdataModule { }
