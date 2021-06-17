import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  productList:any=[];
 

  constructor(private userDataService:UserdataService,private router:Router,private toastr:ToastrService) {
    


    
   }

  ngOnInit(): void {
    this.userDataService.getAll().subscribe(success=>{
      this.productList=success
       console.log(JSON.stringify(this.productList))
     }) 
  }

  edit(p_id,p_name,p_price){
    this.router.navigate(['/charts'],{ queryParams: { id: p_id, title:p_name,price:p_price }})
  }
  view(p_id,p_name,p_price){
    this.router.navigate(['/charts'],{ queryParams: { id: p_id, title:p_name,price:p_price,isView:true }})
  }
  addProduct(){
    this.router.navigate(['/charts'])
  }
  deleteProduct(product){
   
    this.userDataService.deleteProduct(product).subscribe(success=>{
      this.productList=success;
      this.toastr.success('SUCCESS!! Updated succefully');
      this.ngOnInit();
     }) 
  }
}
