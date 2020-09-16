const list = document.getElementById("links")

const links = [{
    label: "Week1",
    url: "week1/index.html"
}, {
    label: "Week2",
    url: ""
}]

links.forEach(link => {
    let li = document.createElement("li")
    let a = document.createElement("a")

    a.href = link.url
    a.innerText = link.label

    let a2 = a.cloneNode(true);

    li.appendChild(a)
    list.appendChild(li)
})