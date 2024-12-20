import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard  {
    canActivate(): Observable<boolean> {
        return of(true);
    }
}
