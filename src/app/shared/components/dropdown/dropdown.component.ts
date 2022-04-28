import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownItemModel } from '../../models/dropdown-item.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> implements OnInit {
  @Input() placeholder!: string;
  @Output() itemSelected: EventEmitter<DropdownItemModel<T>> = new EventEmitter<DropdownItemModel<T>>();
  private _items: DropdownItemModel<T>[] = [];
  @Input() get items(): DropdownItemModel<T>[] {
    return this._items;
  }

  set items(value: DropdownItemModel<T>[]) {
    this._items = value;

    const defaultValues = this._items.filter(x => x.isDefault);
    if (defaultValues.length > 0) {
      this.selectedItem = defaultValues[0];
    }
  }

  selectedItem!: DropdownItemModel<T>;

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelect(selectedItem: DropdownItemModel<T>): void {
    this.itemSelected.emit(selectedItem);
  }
}
