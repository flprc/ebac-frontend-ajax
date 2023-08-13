const postContainer = document.getElementById('posts');
const loadPost = document.getElementById('loadPost');

let postMarkup = '';
let postIndex = 1;
let totalPosts = 0;

function createPost(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(postData => console.log(postData))
    .catch(error => console.error(error));
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            totalPosts = posts.length;
            console.log(totalPosts);
        })
        .catch(error => console.error(error));
}

function fetchPostById(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            postMarkup += `
                <div class="posts-item" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>`;
            postContainer.innerHTML = postMarkup;
        })
        .catch(error => console.error(error));
}

fetchPosts();
fetchPostById(postIndex);

loadPost.addEventListener('click', function (e) {
    if (postIndex < totalPosts)
        fetchPostById(++postIndex);
});
