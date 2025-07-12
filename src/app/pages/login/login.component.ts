import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
@Component({
  selector: 'app-login',
  imports: [FormsModule, Toast],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginService = inject(LoginService);
  router = inject(Router);
  messageService = inject(MessageService);

  userLoginObj: any = {
    username: '',
    password: '',
  };
  ngOnInit(): void {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.handleLogin();
      }
    });
  }

  handleLogin() {
    this.loginService.userLogin(this.userLoginObj).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'اطلاعات واردشده صحیح است',
          life: 3000,
        });
        setTimeout(() => {
          this.router.navigate(['./dashboard']);
        }, 4000);
        // alert('user loged');

        console.log(res);
        console.log(res.id);
      },
      error: (res: any) => {
        // alert('user not loged');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'اطلاعات واردشده صحیح نیست',
          life: 3000,
        });
      },
    });
  }
}
