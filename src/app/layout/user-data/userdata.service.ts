import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get(environment.baseURL+'getAllProducts')
    
  }
  saveProduct(data){
    return this.httpClient.post(environment.baseURL+'addProduct',data)
  }
  deleteProduct(p_id){
    return this.httpClient.delete(environment.baseURL+'deleteProduct/'+p_id)
  }
  updateProduct(data){
    return this.httpClient.put( environment.baseURL+'updateProduct',data)
  }
}
