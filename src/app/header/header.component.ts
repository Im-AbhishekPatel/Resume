import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() name = '';
  @Input() profile = '';
  @Input() mobile = '';
  @Input() address = '';
  @Input() github = '';
  @Input() linkedin = '';
}
