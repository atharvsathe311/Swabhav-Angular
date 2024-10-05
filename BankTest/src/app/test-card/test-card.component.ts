import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css']
})
export class TestCardComponent implements OnInit {
  Math = Math
  filteredTransactions: any[] = [];
  searchForm!: FormGroup;
  transactionForm!: FormGroup;
  currentPage: number = 1;
  pageSize: number = 10;
  totalTransactions: number = 0;
  displayedPages: number[] = [];
  pageLimit: number = 10; 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForms();
    this.loadTransactions();
  }

  initForms() {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('', Validators.required)
    });

    this.transactionForm = new FormGroup({
      transactions: new FormArray([])
    });

    this.searchForm.get('searchTerm')?.valueChanges.subscribe((searchTerm) => {
      this.loadTransactions(this.currentPage, searchTerm);
    });
  }

  loadTransactions(page: number = 1, searchTerm: string = '') {
    this.getTransactions(page, searchTerm).subscribe(
      (response) => {
        this.filteredTransactions = response.transactions;
        this.totalTransactions = response.totalCount; // Assuming your API returns the total count
        this.populateTransactionControls();
        this.updateDisplayedPages(); // Update displayed pages
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  getTransactions(page: number, searchTerm: string): Observable<any> {
    const params = {
      page: page.toString(),
      pageSize: this.pageSize.toString(),
      searchTerm: searchTerm
    };

    return this.http.get<any>('https://localhost:7088/api/Transaction/GetTransaction', { params })
      .pipe(
        tap(response => console.log('Fetched transactions:', response)),
        catchError(this.handleError('getTransactions', { transactions: [], totalCount: 0 }))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return new Observable<T>(observer => observer.next(result as T));
    };
  }

  populateTransactionControls() {
    const transactionsFormArray = this.transactionForm.get('transactions') as FormArray;
    transactionsFormArray.clear();

    this.filteredTransactions.forEach((transaction) => {
      transactionsFormArray.push(
        new FormGroup({
          selectedForBatch: new FormControl(false),
          transactionId: new FormControl(transaction.transactionId)
        })
      );
    });
  }

  updateDisplayedPages() {
    const totalPages = Math.ceil(this.totalTransactions / this.pageSize);
    const startPage = Math.floor((this.currentPage - 1) / this.pageLimit) * this.pageLimit + 1;
    const endPage = Math.min(startPage + this.pageLimit - 1, totalPages);
    
    this.displayedPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  changePage(page: number) {
    if (page < 1 || page > Math.ceil(this.totalTransactions / this.pageSize)) return;
    this.currentPage = page;
    this.loadTransactions(page, this.searchForm.get('searchTerm')?.value);
  }

  getStatusText(status: number): string {
    switch (status) {
      case 4: return 'Rejected';
      case 1: return 'Pending';
      case 3: return 'Approved';
      default: return 'Unknown Status';
    }
  }

  processBatch() {
    const selectedTransactions = this.transactionForm.value.transactions.filter((transaction: any) => transaction.selectedForBatch);

    if (selectedTransactions.length > 0) {
      const transactionIds = selectedTransactions.map((transaction: any) => transaction.transactionId);
      console.log('Processing batch for the following transaction IDs:', transactionIds);
      // const apiUrl = 'https://localhost:7120/api/Payment/BulkPaymentAccepted';
      // this.http.post(apiUrl, transactionIds).subscribe({
      //   next: (response) => {
      //     this.router.navigate(['../approved-transactions'], { relativeTo: this.route });
      //     console.log('Salary transfers sent successfully:', response);
      //   },
      //   error: (error) => {
      //     console.error('Error sending salary transfers:', error);
      //   }
      // });
    } else {
      alert('No transactions selected for batch processing.');
    }
  }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    const transactionsFormArray = this.transactionForm.get('transactions') as FormArray;

    transactionsFormArray.controls.forEach(control => {
      control.get('selectedForBatch')?.setValue(isChecked);
    });
  }
}
