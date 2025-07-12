import { Component, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-user-profile-layout',
  imports: [RouterLink, RouterOutlet, SidebarModule, ButtonModule],
  templateUrl: './user-profile-layout.component.html',
  styleUrl: './user-profile-layout.component.css'
})
export class UserProfileLayoutComponent {
  sidebarVisible: boolean = false;
  readonly sidebarRef = viewChild.required<Sidebar>('sidebarRef');
   closeCallback(e: any): void {
      this.sidebarRef().close(e);
  }
}
