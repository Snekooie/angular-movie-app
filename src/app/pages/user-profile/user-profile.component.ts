import { Component, inject, OnInit } from '@angular/core';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { UserProfile } from './user-profile.model';
import { UserProfilePageService } from './user-profile.service';

@Component({
  selector: 'selector-name',
  templateUrl: 'user-profile.component.html',
  styleUrl: 'user-profile.component.css',
  imports: [UserDetailComponent]
})
export class UserProfilePageComponent implements OnInit {
  userProfileService = inject(UserProfilePageService);
  userProfileData!: UserProfile

  ngOnInit() {
    this.userProfileService.userDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.userProfileData = res;
        console.log(this.userProfileData);
      },
    });
  }
}
