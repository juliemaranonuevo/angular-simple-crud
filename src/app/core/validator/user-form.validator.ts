import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export function maxFileSizePerPhoto(selectedPhotos: FileList): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const TWO_MB = 700;
        // const MB = 1024;
        const KB = 1024;
        const selectedPhotosValues = Object.values(selectedPhotos);
        const valid = selectedPhotosValues.every(selectedPhoto => {
          // const selectedPhotoSizeInMB = selectedPhoto.size / KB / MB;
          const selectedPhotoSizeInMB = selectedPhoto.size / KB;
          return selectedPhotoSizeInMB < TWO_MB;
        });

        return valid ? null : { 'maxFileSizePerPhoto': true };
    }   
}

export function minFileSizePerPhoto(selectedPhotos: FileList): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
        const FIVE_HUNDRED_KB = 500;
        const KB = 1024;
        const selectedPhotosValues = Object.values(selectedPhotos);
        const valid = selectedPhotosValues.every(selectedPhoto => {
          const selectedPhotoSizeInKB = selectedPhoto.size / KB;
          return selectedPhotoSizeInKB > FIVE_HUNDRED_KB;
        });
        return valid ? null : { 'minFileSizePerPhoto': true };
    }
  }

export function uniqueProductCode(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  const productCode = control.value;
  return this.userService.isExistsProductCode(productCode).pipe(
    map(isExistsProductCode => isExistsProductCode ? { "uniqueProductCode": true} : null),
    // catchError(() => of(null))
    catchError(errorRes => {
      this.userService.error.next(errorRes);
      return throwError(errorRes);
    })
  );
}