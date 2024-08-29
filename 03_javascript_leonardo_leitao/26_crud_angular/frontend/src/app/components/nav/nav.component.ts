import { Component } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { HomeComponent } from '../../views/home/home.component'
import { RouterOutlet } from '@angular/router'
import { ProductCrudComponent } from '../../views/product-crud/product-crud.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    RouterOutlet,
    ProductCrudComponent,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {

}
