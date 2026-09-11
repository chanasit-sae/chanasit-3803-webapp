async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "Fix my bugs",
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const post = await response.json();

    document.querySelector("#result").textContent = JSON.stringify(post);
  } catch (err) {
    document.querySelector("#result").textContent = `Error: ${err.message}`;
  }
}

createPost();
