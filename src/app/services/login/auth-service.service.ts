import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user) => {
      this.isLoggedIn = user !== null;
    });
  }

  getToken() {
    return this.afAuth.currentUser.then(user => {
      return user.getIdToken();
    });
  }

  logout() {
    this.afAuth.signOut();
  }
}
