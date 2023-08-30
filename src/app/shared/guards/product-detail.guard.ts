import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  // extract id from url
  const id = Number(route.paramMap.get('id'));
  // inject router
  const router: Router = inject(Router);

  if(isNaN(id) || id<1){
    alert('Invalid Product Id');
    router.navigate(['/products']);
    return false;
  }

  return true;
};
