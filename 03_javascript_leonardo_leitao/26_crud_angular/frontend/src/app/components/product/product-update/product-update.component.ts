import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { MatButtonModule } from '@angular/material/button'
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from '../product.model'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productsService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productsService.update(this.product).subscribe(() => {
      this.productsService.showMessage('Produto atualizado com sucesso...')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
