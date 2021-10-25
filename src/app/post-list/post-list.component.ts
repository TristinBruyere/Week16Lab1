import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allposts: Post[] = [
    {title: "Welcome", thought:"It's great to have you."},
    {title: "Check-In", thought: "How are you?"},
    {title: "Goodbye", thought: "I'm glad you came."}
  ]

  newtitle: string = '';
  newthought: string = '';

  add() {
    this.allposts.push({title:this.newtitle, thought:this.newthought});
  }

  delete(title: string) {
    for(var i=0; i<this.allposts.length; i++){
      if(this.allposts[i]["title"] == title){
        this.allposts.splice(i,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
