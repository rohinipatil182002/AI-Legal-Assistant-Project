import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
@Output() sidebarToggled = new EventEmitter<boolean>();
  
  isCollapsed = false;
  isMobileMenuOpen = false;
  
  activityStats = {
    queries: 127,
    documents: 43,
    searches: 89
  };

  menuItems = [
    { icon: 'fa-home', label: 'Home', route: '/home' },
    { icon: 'fa-comment', label: 'AI Assistant', route: '/ai-assistant' },
    { icon: 'fa-file-alt', label: 'Summarize', route: '/summarize' },
    { icon: 'fa-file', label: 'Generate Document', route: '/generate-document' },
    { icon: 'fa-clipboard', label: 'Regulations', route: '/regulations' },
    { icon: 'fa-search', label: 'Search', route: '/search' }
  ];

  constructor(public router: Router) {
    // Check screen size on init
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) {
      this.isCollapsed = true;
      this.sidebarToggled.emit(true);
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
closeMobileSidebar() {
  if (window.innerWidth <= 768) {
    this.isCollapsed = true;     
    this.sidebarToggled.emit(true);
  }
}

}
