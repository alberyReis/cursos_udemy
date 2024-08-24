import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})

export class AppComponent {

}
