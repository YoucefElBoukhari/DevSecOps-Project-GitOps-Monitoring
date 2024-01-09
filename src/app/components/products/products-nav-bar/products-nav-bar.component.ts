import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";
import {EventDriverService} from "../../../state/event.driver.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrl: './products-nav-bar.component.css'
})
export class ProductsNavBarComponent implements OnInit{

  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService:EventDriverService) {}

  ngOnInit(): void {
    }


  onGetAllProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});

  }

  onGetAvailableProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});


  }

  onNewProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.NEW_PRODUCTS});
  }

  onSearch(dataform: any) {
    //this.productEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataform});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataform});
  }
}
