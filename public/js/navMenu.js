async function navbar() {
  const response = await fetch("/api/isAuthenticated");
  const data = await response.json();

  let navbarHTML;

  if (data.isAuthenticated) {
    navbarHTML = `
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create">Admin Panel</a></li>
            <li><a href="/logout">Log Out</a></li>
          </ul>
        </nav>
      `;
  } else {
    navbarHTML = `
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Admin Login</a></li>
          </ul>
        </nav>
      `;
  }

  document.querySelector("header").innerHTML = navbarHTML;
}

navbar();
