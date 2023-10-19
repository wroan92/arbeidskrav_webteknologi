document
  .getElementById("createPostForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const title = document.getElementById("titleCreate").value;
    const content = document.getElementById("contentCreate").value;
    const author = document.getElementById("authorCreate").value;

    const data = {
      ID: new Date().getTime(),
      Title: title,
      Content: content,
      Author: author,
      DateCreated: new Date().toISOString(),
    };

    const response = await fetch("/api/blogposts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Post created successfully!");
    } else {
      alert("An error occurred. Please try again.");
    }
  });

document
  .getElementById("updateForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const postId = document.getElementById("updatePostIdDropdown").value;
    const title = document.getElementById("titleUpdate").value;
    const content = document.getElementById("contentUpdate").value;
    const author = document.getElementById("authorUpdate").value;

    const data = {};

    if (title) data.Title = title;
    if (content) data.Content = content;
    if (author) data.Author = author;

    if (!title && !content && !author) {
      alert("No changes detected.");
      return;
    }

    const response = await fetch(`/api/blogposts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Post updated successfully!");
    } else {
      alert("An error occurred. Please try again.");
    }
  });

document
  .getElementById("deleteForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const postId = document.getElementById("deletePostIdDropdown").value;

    const response = await fetch(`/api/blogposts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Post deleted successfully!");
    } else {
      alert("An error occurred. Please try again.");
    }
  });

async function fillDropdownWithData(dropdownElementId) {
  try {
    const response = await fetch("/api/blogposts");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const dropdown = document.getElementById(dropdownElementId);

    dropdown.innerHTML = "";

    data.forEach((post) => {
      const option = document.createElement("option");
      option.value = post.ID;
      option.innerText = `Title: ${post.Title} (ID:${post.ID})`;
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error.message);
  }
}

fillDropdownWithData("deletePostIdDropdown");
fillDropdownWithData("updatePostIdDropdown");
