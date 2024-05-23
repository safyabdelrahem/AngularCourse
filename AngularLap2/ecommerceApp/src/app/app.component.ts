import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './componanets/nav-bar/nav-bar.component';
import { FooterComponent } from './componanets/footer/footer.component';
import { ContentSectionComponent } from './componanets/content-section/content-section.component';
import { OrderComponent } from './componanets/order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent,FooterComponent,OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerceApp';
}
