import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor() { }
  public getRoutePeram(paramName: string, activatedRoute: ActivatedRoute): string {
    var snapshot = activatedRoute.snapshot;
    return this._getParamValue(paramName, snapshot);
  }
  private _getParamValue(paramName: string, routeObject: ActivatedRouteSnapshot): string{
    if(!routeObject)
      return null;
    if(paramName === null)
      return null;
    if(routeObject.paramMap.get(paramName) !== null)
      return routeObject.paramMap.get(paramName);
    else
      return this._getParamValue(paramName, routeObject.parent);
  }
}
