
dialogBtn = document.querySelector("#initDialog")
dialog = document.querySelector("#dia")
closeDia = document.querySelector("#close")
addButton = document.querySelector("#diaBtn")
const bookName = document.querySelector("#bookName")
const authorElement = document.querySelector("#author")
const pages = document.querySelector("#pages")
const container = document.createElement("div")
container.classList.add("container")
const myLibrary = [
];

function Book(name,author,pages,beenRead) {
  this.name = name;
  this.author= author;
  this.pages = pages;
  this.beenRead = beenRead;
}
function addBookToLibrary(book) {
myLibrary.push(book)
}
let dataViz = new Book("Data Visualization with Python and Javascript","Kyran Dale",450,false);
let brother = new Book("Brother","Ania Ahlborn",250,false)
addBookToLibrary(dataViz)
addBookToLibrary(brother)

function displayBooks(){
    clearContainer();
    for(let i =0; i < myLibrary.length; i++){
        container.appendChild(createBookContainer(myLibrary[i]))
    }
    document.body.appendChild(container)
}

function createBookContainer(book){
    let card = document.createElement("div")
    card.classList.add("card")
    let header = document.createElement("h2")
    header.innerText = book.name;
    header.classList.add("card-title")
    card.appendChild(header);
    let description = document.createElement("p")

    description.innerText= `By ${book.author}`;
    let div = document.createElement("div")
    let btn = document.createElement("button")
    let page = document.createElement("span")
    page.innerText = book.pages
    btn.innerText = book.beenRead;
    btn.classList.add("bool")
    btn.id="toggle";
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("bool")){
            btn.classList.remove("bool")
            btn.classList.add("true")
            btn.innerText= "true"
        }else{
            btn.classList.remove("true")
            btn.classList.add("bool")
            btn.innerText= "false"
        }
    })
    div.appendChild(page)
    div.appendChild(btn)
    div.classList.add("flex","row")
    card.appendChild(description)
    card.appendChild(div)
    return card;
}
displayBooks()

dialogBtn.addEventListener("click",()=>{
    dialog.showModal();
})
closeDia.addEventListener("click",()=>{
    dialog.close();
})

addButton.addEventListener("submit",(e)=>{
    e.preventDefault();
    let book =  bookName.value;
    let author = authorElement.value;
    console.log(book,author)
    myLibrary.push(new Book(book,author,pages.value,false));
    displayBooks()
    bookName.value =""
    authorElement.value=""
    pages.value =""
    dialog.close();
})

function clearContainer(){
    container.innerHTML = ""
}

