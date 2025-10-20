import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>('');
  public searchQuery$ = this.searchQuery.asObservable();

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  clearSearch() {
    this.searchQuery.next('');
  }
}
