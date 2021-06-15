import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';
import { UserdataService } from '../user-data/userdata.service';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    updateForm: FormGroup;
    submitted: boolean;
    isView: boolean;
    operationStartTime:any;
    operationEndTime:any;
    differenceInTime: number;
    constructor(private formBuilder: FormBuilder,public router:Router,
        public activatedRoute:ActivatedRoute,public toastr:ToastrService,private userDataService:UserdataService){
        this.updateForm = this.formBuilder.group({
            p_name: ['', Validators.required],
            p_price: ['', Validators.required],
            p_id: [''], 
        },);
         this.operationStartTime=new Date();
    }
    

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {     
            if(params.isView){
               this.isView=true;
            }
                this.updateForm.controls['p_id'].setValue(params.id);
                this.updateForm.controls['p_name'].setValue(params.title);
                this.updateForm.controls['p_price'].setValue(params.price);
        });
        
        
    }
    get f() { return this.updateForm.controls; }
    onSubmit() {
        alert(this.updateForm.value.p_id)
        this.submitted = true;
        if (this.updateForm.invalid) {
            return;
        }
        // alert('SUCCESS!! Updated succefully :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
        else if(!this.updateForm.value.p_id){
           
      this.userDataService.saveProduct(this.updateForm.value).subscribe(success1 => {
        var success: any = success1;
        this.toastr.success(success)
      });
        }
        else if(this.updateForm.value.p_id){
            this.userDataService.updateProduct(this.updateForm.value).subscribe(success1 => {
                var success: any = success1;
                this.toastr.success(success)
              });
        }
        this.toastr.success('SUCCESS!! Updated succefully');
        this.operationEndTime=new Date();
        this.differenceInTime = Math.round((this.operationEndTime - this.operationStartTime) / (60 * 24));
        this.toastr.info("Operation Completed in " +  this.differenceInTime + " seconds")
        this.router.navigate(['/userdata']);
    }

    back(){
        this.router.navigate(['/userdata']);
    }

    showToasterSuccess(){
        
        this.toastr.success("Data !!")
    }
    
   
   
}
