import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../product.service';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {
	
	banner: any;
	destination: any;
	produk: any;
	
  constructor(private productservis: ProductService) { }

  ngOnInit() {
	   this.getBanner();
	   this.getTop();
	   this.getAct();
  }

  getBanner()
  {
	 this.productservis.getBanner()
		.subscribe(banner => {
			this.banner=banner['data']['data'];
			console.log(this.banner);
		});
  }
  
  getTop()
  {
		this.productservis.getTopDest()
		.subscribe(dest => {
			this.destination=dest['data']['data'];
			console.log(this.destination);
		});
  }
  
  getAct()
  {
	  this.productservis.getActivity()
		.subscribe(product => {
			this.produk=product['data']['data'];
			console.log(this.produk);
		});
  }
  
}
