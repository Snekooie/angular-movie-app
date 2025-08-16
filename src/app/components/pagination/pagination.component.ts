import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [PaginatorModule, NgClass, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  currentpage: number = 1;

  nextPage() {
    if (this.currentpage === this.pages.length) {
      this.currentpage = 1;
    } else {
      this.currentpage++;
    }
  }

  prevPage() {
    if (this.currentpage === 1) {
      this.currentpage = this.pages.length;
    } else {
      this.currentpage--;
    }
  }

  goToPage(page: number) {
    this.currentpage = page;
  }

  visiblePage(): number[] {
    const startPage = Math.max(this.currentpage - 2, 1);
    const endpage = Math.min(this.currentpage + 2, this.pages.length);
    return this.pages.slice(startPage - 1, endpage);
  }
}
