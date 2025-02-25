import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl: string = 'https://vidyaarthee.com/mail/'

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}email.php`, data);
  }

  sendContactDetails(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}contact.php`, data)
  }

  ////////////////// Toast methods //////////////////
  ToastSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,  // Toast duration in milliseconds
      panelClass: ['primary-snackbar'],  // Custom CSS class
      horizontalPosition: 'center',  // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'bottom',  // 'top' | 'bottom'
    });
  }

  ToastWarning(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['warning-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  ToastDanger(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['danger-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
