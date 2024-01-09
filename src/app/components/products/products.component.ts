import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products$:Observable<AppDataState<Product[]>>|null=null;
  readonly DataStateEnum=DataStateEnum;
  constructor(private productService:ProductsService, private router:Router) {}
  ngOnInit() {
  }
  onGetAllProducts(){
    this.products$=this.productService.getAllProducts().pipe(
      map(data=>{
        console.log(data);
        return({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({datastate:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onGetSelectedProducts(){
    this.products$=this.productService.getSelectedProducts().pipe(
      map(data=>{
        console.log(data);
        return({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({datastate:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onGetAvailableProducts(){
    this.products$=this.productService.getAvailableProducts().pipe(
      map(data=>{
        console.log(data);
        return({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({datastate:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSearch(dataForm: any) {
    this.products$=this.productService.searchProducts(dataForm.keyword).pipe(
      map(data=>{
        console.log(data);
        return({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({datastate:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSelect(p: Product) {
    this.productService.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })
  }
  onDelete(p: Product) {
    let v=confirm("Etes vous sure ?");
    if(v==true)
    this.productService.deleteProduct(p)
      .subscribe(data=>
      this.onGetAllProducts())

  }
  onNewProducts() {
    this.router.navigateByUrl("/newProduct")

  }
  onEdit(p: Product) {
    this.router.navigateByUrl("editProduct:/"+p.id);
  }

  onAtionEvent($event:ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS: this.onGetAllProducts();break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();break;
      case ProductActionsTypes.SEARCH_PRODUCTS: this.onSearch($event.payload);break;
      case ProductActionsTypes.NEW_PRODUCTS: this.onNewProducts();break;
      case ProductActionsTypes.SELECT_PRODUCTS: this.onSelect($event.payload);break;
      case ProductActionsTypes.DELETE_PRODUCTS: this.onDelete($event.payload);break;
      case ProductActionsTypes.EDIT_PRODUCTS: this.onEdit($event.payload);break;
    }
  }
}
