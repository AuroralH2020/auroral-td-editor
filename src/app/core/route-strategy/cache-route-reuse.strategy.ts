import { RouteReuseStrategy } from '@angular/router/'
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router'

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  private _savedHandles = new Map<string, DetachedRouteHandle | null>()

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this._savedHandles.has(this._getRouteKey(route))
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this._savedHandles.get(this._getRouteKey(route)) ?? null
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data.saveComponent
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const key = this._getRouteKey(route)
    this._savedHandles.set(key, handle)
  }

  private _getRouteKey(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .filter((u) => u.url)
      .map((u) => u.url)
      .join('/')
  }
}
