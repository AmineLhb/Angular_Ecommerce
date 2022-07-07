import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product= new Product(0,"","","",0,"",{id:0, categoryName:""});
  id:number=0;
  constructor(private product_service:ProductService,private cartService: CartServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.get_product();
    });
  }
  get_product(){
    const hasid:boolean=this.route.snapshot.paramMap.has('id');
    if(hasid){
      this.id=Number(this.route.snapshot.paramMap.get('id')) ;
      this.product_service.getproduct(this.id).subscribe(
        data=>{
          this.product=data;
        }
      );
    }


  }
  addToCart(theProduct: Product) {


    // TODO ... do the real work
    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

}
