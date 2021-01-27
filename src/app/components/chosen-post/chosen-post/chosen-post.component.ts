import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../../models/i-Post';

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as IPost;
    });
  }

  ngOnInit(): void {
  }

}
