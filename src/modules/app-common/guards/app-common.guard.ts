import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable()
export class AppCommonGuard  {
    canActivate(): Observable<boolean> {
        return of(true);
    }
}
