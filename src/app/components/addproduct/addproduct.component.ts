import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { AddproductService } from 'src/app/services/addproduct.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  products: Product[]=[];
  categories: ProductCategory[]=[];
  constructor(private addproductService: AddproductService,private categoryservice :CategoryServiceService) { }

  ngOnInit() {
    this.list_categories();

      console.log(this.categories);
      console.log(this.products);
  }

  list_categories(){

    this.categoryservice.getCategories().subscribe(
      data=>{
        this.categories=data;
      }
    );
  }

  addproduct(){
    console.log(this.products);
    this.addproductService.addProduct(this.products).subscribe(
      data=>{
        this.products=data;
      }
    );

  }
}
