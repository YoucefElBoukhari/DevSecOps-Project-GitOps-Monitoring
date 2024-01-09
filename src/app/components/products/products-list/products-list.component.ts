import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Observable} from "rxjs";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  @Input() products$:Observable<AppDataState<Product[]>> |null=null;
  //@Output() productsEventEmitter: EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;
  constructor() {
  }
  ngOnInit(): void {}
/*
  onSelect(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCTS,payload:p});

  }

  onDelete(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCTS,payload:p});

  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCTS,payload:p});
  }
  */
}
