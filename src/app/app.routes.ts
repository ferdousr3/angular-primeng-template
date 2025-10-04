import { Route, Routes } from '@angular/router'
import { AboutRoutes, aboutRoutes } from './pages/about/about.routes'
import { HomeRoutes, homeRoutes } from './pages/home/home.routes'
import {
    NotFoundRoutes,
    notFoundRoutes,
} from './pages/not-found/not-found.routes'
import { PostRoutes, postRoutes } from './pages/post/post.routes'

type AppRouteGroups = [HomeRoutes, AboutRoutes, PostRoutes, NotFoundRoutes]

const groupedRoutes: AppRouteGroups = [
    homeRoutes,
    aboutRoutes,
    postRoutes,
    notFoundRoutes,
]

const flattenedRoutes: Route[] = []
for (const routeGroup of groupedRoutes) {
    for (const route of Object.values(routeGroup)) {
        flattenedRoutes.push(route)
    }
}

export const appRoutes = flattenedRoutes
