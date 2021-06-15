import { Component, OnInit } from '@angular/core';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    say: any;
    constructor() {}

    ngOnInit() {}

    sayHi(){
        this.say=HiComponent
      }
      sayHello(){
        this.say=HelloComponent
      }
      sayGoodBye(){
        this.say=GoodbyeComponent
      }
    
}
