async function fetchPosts() {
  const response = await fetch("/api/blogposts");
  const posts = await response.json();

  const postList = document.getElementById("postList");

  postList.innerHTML = "";

  for (let post of posts) {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="post-header">
        <h3>${post.Title}</h3>
        <p><strong>Author:</strong> ${
          post.Author
        } | <strong>Date:</strong> ${new Date(
      post.DateCreated
    ).toLocaleString()}</p>
    </div>
    <div class="post-content">
        <p>${post.Content}</p>
    </div>
`;

    postList.appendChild(li);
  }
}

fetchPosts();
