import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent,HelloComponent,GoodbyeComponent,HiComponent]
})
export class BlankPageModule {}
