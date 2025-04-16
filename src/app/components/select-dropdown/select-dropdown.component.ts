import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [NgSelectModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.css'
})
export class SelectDropdownComponent {
  manufacturers = [
    { id: 1, name: 'Manufacturer 1' },
    { id: 2, name: 'Manufacturer 2' },
    { id: 3, name: 'Manufacturer 3' },
    // other manufacturers
  ];

  items = [
    { name: 'Item 1', image: 'path/to/image1.jpg' },
    { name: 'Item 2', image: 'path/to/image2.jpg' },
    // more items
  ];
  selectedItem: any;

  onSelect(event: any) {
    console.log('Selected item:', event);
  }

}
