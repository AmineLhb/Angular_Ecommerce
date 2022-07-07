import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: ProductCategory[]=[];
  constructor(private categoryservice :CategoryServiceService) { }


  ngOnInit() {

      this.list_categories();

      console.log(this.categories);
  }
  list_categories(){

    this.categoryservice.getCategories().subscribe(
      data=>{
        this.categories=data;
      }
    );
  }

}


