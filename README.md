>[!NOTE]
>For this interview, you will need to complete the PostDetail.js file completely, and the return rendering of the App.js file.

# Front End Web Development Interview 1

We have a site that displays user posts from our jsonplaceholder website.
For this challenge, we're going to display comments from user posts using the JSONPlaceholder API. You should be familiar with this API from past exercises.


## Success Criteria

Functionality:

- Posts load from https://jsonplaceholder.typicode.com/posts?userId=1 and are displayed on the page. The page displays posts for just one user as specified by the userId.
- The page displays the title and body properties from the post
- When a post's body is clicked, the post's comments are fetched from https://jsonplaceholder.typicode.com/posts/${postId}/comments.
- The page displays the body property of all the comments for a post on the page after the post is clicked


## Specific Instructions and helpful tips

- Posts have this structure:
```
{
  "userId": 1,
  "id": 1,
  "title": "Post 1",
  "body": "Post 1 body"
},
```
- The post should display the title and body
- Each post has 5 comments
- A post's comments have the following structure:
```
{
  "postId": 1,
  "id": 4,
  "name": "Comment 4",
  "email": "Nav@fav.tv",
  "body": "Comment 4 body" 
}
```
- A post's comments should only show after the post body is clicked. The commenter's email must be displayed on the page.
- All information can be displayed on the same page
- It's not necessary to use an AbortController to pass the tests.
- You may use official documentation found online (such as MDN, W3Schools or any other official documentation for the libraries used in the mock interview) to look up syntax, but you may not use personal notes or Q&A forums such as Stack Overflow.