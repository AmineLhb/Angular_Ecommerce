import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[]=[];
  category_id:number=0;
  keyword:string ='';
  constructor(private productService: ProductService, private cartService: CartServiceService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.list_product();
    });

  }
  list_product(){
    const hasCatId:boolean=this.route.snapshot.paramMap.has('category-id');
    const haskey:boolean=this.route.snapshot.paramMap.has('keyword');

    if(hasCatId){
      this.cat_product() ;
    }

    else if(haskey){
      this.search_product();
      }
    else{
      this.all_products();
    }

  }
  cat_product(){
    const hasCatId:boolean=this.route.snapshot.paramMap.has('category-id');
    if(hasCatId){
      this.category_id=Number(this.route.snapshot.paramMap.get('category-id')) ;
    }
    else{
      this.category_id=1;
    }
    this.productService.getProductList(this.category_id).subscribe(
      data=>{
        this.products=data;
      }
    );
  }
  search_product(){
    const haskey:boolean=this.route.snapshot.paramMap.has('keyword');
    if(haskey){
      this.keyword=String( this.route.snapshot.paramMap.get('keyword') );
    }

    this.productService.searchProductList(this.keyword).subscribe(
      data=>{
        this.products=data;
      }
    );
  }
  all_products(){

    this.productService.allproducts().subscribe(
      data=>{
        this.products=data;
      }
    );
  }

  addToCart(theProduct: Product) {


    // TODO ... do the real work
    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

}
