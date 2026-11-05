const information = document.getElementById('info')

var user_status = "Chummy"

/*
const setButton = document.getElementById('testButton')
setButton.addEventListener('click', () => {
        window.versions.chatBox()
        information.innerText = "Something Else"
    })
*/

let chumroll = document.getElementById('chumroll')
information.innerText = chumroll.lastChild
while (chumroll.firstChild)
{
    chumroll.removeChild(chumroll.lastChild)
}

var chumList = ["Cyan","Nico","Anna","Az","Caz","Hatsune Miku"]

for (var i = 0; i < chumList.length; i++)
{
    const btn = document.createElement('button');
    btn.className = 'chumButton'
    btn.textContent = chumList.at(i)

    btn.onclick = function(event) {
        window.versions.chatBox(btn.textContent)
    }
    const tableItem = document.createElement("TD")
    tableItem.appendChild(btn)
    const tableRow = document.createElement("TR")
    tableRow.appendChild(tableItem)
    chumroll.appendChild(tableRow)
}

const status_buttons = document.getElementsByClassName("status");
for (b in status_buttons)
{
    b.onclick = function(event) {
        user_status = b.innerText;
        information.innerText = user_status;
    }
}


/*
let buttonList = document.getElementsByClassName('chumButton')
for (const button in buttonList)
{
    
    button.addEventListener('click', () => {
        window.versions.chatBox()
        information.innerText = "Something Else"
    })
}
    */