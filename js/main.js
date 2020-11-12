const list = document.getElementById("links")

const links = [{
    label: "Week1",
    url: "week1/index.html"
}, {
    label: "Week2",
    url: "week2/index.html"
}, {
    label: "Week3",
    url: "week3/index.html"
}, {
    label: "Week4",
    url: "week4/index.html"
}, {
    label: "Week5",
    url: "week5/index.html"
}, {
    label: "Week6",
    url: "week6/index.html"
}, {
    label: "Week7",
    url: "week7/index.html"
}, {
    label: "Week8",
    url: "week8/index.html"
}, {
    label: "Week9",
    url: "week9/index.html"
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