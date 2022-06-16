import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
const urlAPI = 'http://localhost:3000/product';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${urlAPI}`)
  }
  getList(id:number):Observable<Blog[]>{
    return this.http.get<Blog[]>(`${urlAPI}?category_id=${id}`)
  }
  deletePro(id:number):Observable<Blog[]>{
    return this.http.delete<Blog[]>(`${urlAPI}/${id}`)
  }
  addProduct(data:Blog):Observable<Blog[]>{
    return this.http.post<Blog[]>(`${urlAPI}`,data)
  }
  update(id:number,data:Blog):Observable<Blog[]>{
    return this.http.put<Blog[]>(`${urlAPI}/${id}`,data)
  }
  find(id:number):Observable<Blog>{
    return this.http.get<Blog>(`${urlAPI}/${id}`)
  }
 
}
