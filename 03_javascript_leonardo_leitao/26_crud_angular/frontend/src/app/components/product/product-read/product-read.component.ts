import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatTableModule, MatTable } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})

export class ProductReadComponent implements OnInit {
  products?: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
}
