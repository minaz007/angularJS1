import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.getUserName()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}