import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild('sidebar') sidebar!: SidebarComponent;
  title = 'AI_Legal_Assistant';
    isSidebarCollapsed = false;

  onSidebarToggle(collapsed: boolean) {
  this.isSidebarCollapsed = collapsed;
}
 toggleSidebarFromNavbar() {
    this.sidebar.toggleSidebar();   
  }
}
