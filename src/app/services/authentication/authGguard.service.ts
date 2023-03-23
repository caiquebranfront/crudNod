import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.afAuth.authState.pipe(
      tap((user) => {
        if (!user) {
          this.router.navigate(['/login']);
        }
      }),
      map((user) => user !== null)
    );
  }
}
