import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiReqGoogleService {
  private apiUrl = 'https://www.googleapis.com/drive/v3/files';

  constructor(private http: HttpClient) {}

  getDriveDoc(docId: string): Observable<any> {
    const docUri = `${this.apiUrl}/${docId}/export?mimeType=text/plain&key=AIzaSyAwd11uAvXdf8qkUNEef-HUGLl1NYLV6Qc`;
    return this.http.get(docUri)
    .pipe(
      tap(response => console.log('Response:', response)),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}
