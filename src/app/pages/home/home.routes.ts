import { Route } from '@angular/router'
import { PageLayout, setLayout } from '../../../libs/common-components'

export type HomeRoutes = {
   home: Route
}

export const homeRoutes: HomeRoutes = {
   home: {
      path: '/',
      loadComponent: () =>
         import('./page-home/page-home.component').then(
            (m) => m.PageHomeComponent,
         ),
      resolve: { layout: setLayout(PageLayout.Public) },
   },
}