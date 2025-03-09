import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  productName = 'MyName';
  price = 1999;
  isAvailable = true;
  products = [
    { name: 'Smartphone', price: 2999.99 },
    { name: 'Laptop', price: 4999.99 },
    { name: 'Tablet', price: 1999.99 }
  ];

  toggleAvailability = () => this.isAvailable = !this.isAvailable;
}
