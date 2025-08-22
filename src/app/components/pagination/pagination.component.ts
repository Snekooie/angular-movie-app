import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() pageChanged = new EventEmitter<number>();

  nextPage() {
    this.currentpage++;
    this.pageChanged.emit(this.currentpage);
  }

  prevPage() {
    this.currentpage--;
    this.pageChanged.emit(this.currentpage);
  }

  goToPage(page: number) {
    this.currentpage = page;
    this.pageChanged.emit(this.currentpage);
  }

  visiblePage(): number[] {
    const startPage = Math.max(this.currentpage - 2, 1);
    const endpage = Math.min(this.currentpage + 2, this.pages.length);
    return this.pages.slice(startPage - 1, endpage);
  }
}
