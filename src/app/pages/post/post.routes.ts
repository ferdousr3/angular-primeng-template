import { Route } from '@angular/router'
import { PageLayout, setLayout } from '../../../libs/common-components'

export type PostRoutes = {
    post: Route
}

export const postRoutes: PostRoutes = {
    post: {
        path: 'post',
        loadComponent: () =>
            import('./page-post/page-post.component').then(
                (m) => m.PagePostComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Dashboard) },
    },
}
