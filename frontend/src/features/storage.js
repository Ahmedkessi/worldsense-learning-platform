/*export function saveUserToStorage(username, userState) {
  const users = JSON.parse(localStorage.getItem("WorldWise_users")) || {};
  users[username] = userState;
  localStorage.setItem("WorldWise_users", JSON.stringify(users));
}
*/
export function loadUserFromStorage(username) {
  const users = JSON.parse(localStorage.getItem("WorldWise_users")) || {};
  return users[username] || null;
}


export function saveUserToStorage(userState) {
  const currentUser = localStorage.getItem("WorldWise_currentUser");
  if (!currentUser) return;

  const users = JSON.parse(localStorage.getItem("WorldWise_users")) || {};
  users[currentUser] = userState;
  localStorage.setItem("WorldWise_users", JSON.stringify(users));
}
