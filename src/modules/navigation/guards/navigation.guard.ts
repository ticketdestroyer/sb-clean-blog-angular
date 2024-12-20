import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable()
export class NavigationGuard  {
    canActivate(): Observable<boolean> {
        return of(true);
    }
}
