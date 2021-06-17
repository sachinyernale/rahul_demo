import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  URL: string;

  constructor(private httpClient:HttpClient) {
    this.URL= 'http://af336c890cd1a4c1eae36f972d556914-1183209814.us-east-1.elb.amazonaws.com:8080/';
   }

  getAll() {
    return this.httpClient.get(this.URL+'getAllProducts')
    
  }
  saveProduct(data){
    return this.httpClient.post(this.URL+'addProduct',data)
  }
  deleteProduct(data){
    return this.httpClient.delete(this.URL+'deleteProduct',data)
  }
  updateProduct(data){
    return this.httpClient.put( this.URL+'updateProduct',data)
  }
}
