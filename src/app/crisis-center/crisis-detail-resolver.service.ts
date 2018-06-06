import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { delay, map, take } from 'rxjs/operators';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

  constructor(
    private crisisService: CrisisService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');

    // return observable for use in component
    return this.crisisService.getCrisis(id).pipe(
      take(1),
      delay(3000),
      map(crisis => {
        if (crisis) {
          return crisis;
        } else {
          this.router.navigate(['/crisis-center']); // redirect to crisis center index if crisis not found
          return null;
        }
      })
    );
  }

}
