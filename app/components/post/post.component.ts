import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  likes = 0;
  comments: string[] = [];
  newComment = '';
  showCommentBox: boolean = false;

  // Function to Like the post
  likePost() {
    this.likes++;
  }

  // Function to Add a Comment
  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = ''; // Clear input after adding comment
    }
  }

  // ✅ Function to Delete a Comment
  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }

  // Function to Share Post (Copy Link)
  sharePost() {
    const postUrl = window.location.href;
    navigator.clipboard.writeText(postUrl).then(() => {
      alert('Post link copied to clipboard!');
    });
  }
}
