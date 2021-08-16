import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  constructor() {
    this.item = { description: '', done: false };
    this.newItem = '';
  }

  ngOnInit(): void {}

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
