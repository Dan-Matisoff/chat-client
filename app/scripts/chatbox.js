// Renderer for Chatbox
const username = document.getElementById("username")
window.electronAPI.getInfo((input) => {username.innerText = input})
// window.electronAPI.getInfo((value) => {
//     username.innerText = value
// })
