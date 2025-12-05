import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Output() navbarToggle = new EventEmitter<void>();

 constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }
toggleSidebar() {
  this.navbarToggle.emit();
}

toggleLanguage() {
  const current = this.translate.currentLang;
  const newLang = current === 'en' ? 'ar' : 'en';
  this.translate.use(newLang);

  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

  if (newLang === 'ar') {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
}



}
