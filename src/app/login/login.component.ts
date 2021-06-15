import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    submitted: boolean;
    constructor(public router: Router, private formBuilder: FormBuilder,private toastr:ToastrService ) { }
    loginForm: FormGroup;
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

     }

    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
        
    // }

    get f() { return this.loginForm.controls; }

    onLoggedin() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        else if(this.f.username.value=='admin' && this.f.password.value=='admin'){
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
            this.toastr.success('Login successful !!');
            localStorage.setItem('userName',this.f.username.value)
        }else{
            this.toastr.error('Invalid Credentials')
        }

       
    }
}
