import { Component } from '@angular/core';
import { LOGO_URL } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl=LOGO_URL;
}
