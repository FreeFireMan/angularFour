import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostResolveService} from './services/post-resolve.service';
import {ChosenPostComponent} from './components/chosen-post/chosen-post/chosen-post.component';

const routes: Routes = [
  {
    path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [
      {path: ':id', component: ChosenPostComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    ChosenPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
