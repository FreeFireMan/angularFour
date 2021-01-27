import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../models/i-Post';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postService: PostsService) {
  }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[]{
    return this.postService.getPost();
  }
}
