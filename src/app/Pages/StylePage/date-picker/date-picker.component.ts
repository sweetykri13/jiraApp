import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {


  @Input()
  requiredFileType: string | undefined;

  fileName = '';
  uploadProgress!: number | null;
  uploadSub!: Subscription | null;

  constructor(private http: HttpClient) { }

 /* fileUpload.click(): void { }*/

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          } else {
            console.warn('Total size not available for progress calculation.');
            this.uploadProgress = event.loaded ? Math.round(100 * (event.loaded / (1024 * 1024))) : 0;
          }
        }
      });

    }
  }

  cancelUpload() {
    if (this.uploadSub) {
      this.uploadSub.unsubscribe();
    }
    this.reset();
  }


  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

