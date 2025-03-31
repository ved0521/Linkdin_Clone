import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isProfileMenuOpen = false;
  notificationCount = 5; // Default notification count
  selectedTab = 'home';

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  clearNotifications() {
    this.notificationCount = 0;
  }

  searchQuery: string = '';  // ✅ Initialize empty search query

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // You can trigger search logic here, e.g., filtering posts or calling an API
  }

  selectTab(tabName: string) {
    this.selectedTab = tabName;
    console.log('Tab selected:', tabName);
  }

  logout() {
    console.log('User logged out');
    // Add logout functionality here (e.g., clear session, redirect)
  }
}
