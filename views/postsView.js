export const postsList = document.getElementById('posts');

export function updateLikes(li, likes) {
  li.querySelector('.likes').textContent = 'Likes: ' + likes;
  li.dataset.likes = likes;
}

export function removePost(button) {
  button.parentElement.remove();
}

export function reorderPost(li) {
  const likes = Number(li.dataset.likes);

  for (const other of postsList.children) {
    if (other === li) continue;
    if (likes > Number(other.dataset.likes)) {
      postsList.insertBefore(li, other);
      return;
    }
  }
  postsList.appendChild(li);
}
