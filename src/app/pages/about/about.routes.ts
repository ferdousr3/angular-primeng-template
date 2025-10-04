import { Route } from '@angular/router'
import { PageLayout, setLayout } from '../../../libs/common-components'

export type AboutRoutes = {
   about: Route
}

export const aboutRoutes: AboutRoutes = {
   about: {
      path: 'about',
      loadComponent: () =>
         import('./page-about/page-about.component').then(
            (m) => m.PageAboutComponent,
         ),
      resolve: { layout: setLayout(PageLayout.Public) },
   },
}