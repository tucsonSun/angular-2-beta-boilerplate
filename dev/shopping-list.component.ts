import {Component} from 'angular2/core';

@Component({
  selector: 'shopping-list',
  template: `
      <ul>
        <li *ngFor="#item of shoppingListItems" (click)="selectItem(item)">{{item.name}}</li>  
      </ul>
      <input type="text" [(ngModel)]="selectedItem.name" #deleteTextField> 
      <button (click)="deleteItem(deleteTextField)">Delete Value</button> <br/>
      
      <input type="text" #addTextfield>
      <button (click)="addNewItem(addTextfield)">Add Value</button>
    `,
})
export class ShoppingListComponent {
  public shoppingListItems = [
    {name:'Apple'},
    {name:'Beer'},
    {name:'Bob'},
  ];
  public selectedItem = {name:''};

  selectItem(aItem) {
    this.selectedItem = aItem;
  }

  addNewItem(aItem) {
    if (aItem) {
      this.shoppingListItems.push({name: aItem.value});
    }
  }

  deleteItem(deleteTextField) {
    let index = this.shoppingListItems.indexOf(this.selectedItem);
    if (index > -1) {
      this.shoppingListItems.splice(index, 1);
    }
    deleteTextField.value = "";
  }
}
