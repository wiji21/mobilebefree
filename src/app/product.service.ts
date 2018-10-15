import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	private apiurl='http://apibefree.gudangkorina.com';	

	constructor( private http:HttpClient ) { }
	
	getBanner()
	  {	
		const url=`${this.apiurl}/id/banner-home`;
		return this.http.get<any>(url)
			.pipe(
				tap(banner =>
				{	
					console.log(banner);
					return banner;
				})
				,
				catchError(error => {
						console.log(error);
				})
			)
	  }
	
	getTopDest()
	  {	
		const url=`${this.apiurl}/id/topdest`;
		return this.http.get<any>(url)
			.pipe(
				tap(dest =>
				{	
					console.log(dest);
					return dest;
				})
				,
				catchError(error => {
						console.log(error);
				})
			)
	  }
	  
	getActivity()
	  {	
		const url=`${this.apiurl}/id/topactivity`;
		return this.http.get<any>(url)
			.pipe(
				tap(product =>
				{	
					console.log(product);
					return product;
				})
				,
				catchError(error => {
						console.log(error);
				})
			)
	  }
	
}
