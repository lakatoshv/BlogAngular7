import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../services/users/users-service.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    
    constructor(
        private _usersService: UsersService,
        private _router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const authenticated = this._usersService.isLoggedIn();
        if(authenticated) {
            return true;
        }

        this._router.navigate(['/']);
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
    
}