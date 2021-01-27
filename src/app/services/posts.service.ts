import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../models/i-Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url);
  }
}
