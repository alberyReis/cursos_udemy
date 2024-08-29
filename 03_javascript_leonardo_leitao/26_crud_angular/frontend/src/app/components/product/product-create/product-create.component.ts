import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { Product } from '../product.model'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})

export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productsService: ProductService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.showMessage('Produto criado com sucesso...')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
