import { Route, Routes } from '@angular/router';
import { notFoundRoutes, NotFoundRoutes } from './pages/not-found/not-found.routes';
import { homeRoutes, HomeRoutes } from './pages/home/home.routes';
import { aboutRoutes, AboutRoutes } from './pages/about/about.routes';


type AppRouteGroups = [
   AboutRoutes,
   HomeRoutes,
   NotFoundRoutes,
]

const groupedRoutes: AppRouteGroups = [
   aboutRoutes,
   homeRoutes,
   notFoundRoutes,
]

const flattenedRoutes: Route[] = []
for (const routeGroup of groupedRoutes) {
   for (const route of Object.values(routeGroup)) {
      flattenedRoutes.push(route)
   }
}

export const appRoutes = flattenedRoutes
