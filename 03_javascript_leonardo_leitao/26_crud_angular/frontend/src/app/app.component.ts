import { Component, LOCALE_ID } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localePt)
 
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
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt_BR'
  }]
})

export class AppComponent {

}
