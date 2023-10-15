const itemHeader = document.querySelectorAll(".item_header");

itemHeader.forEach(trigger => trigger.addEventListener("click", function (event) {
    const items = document.querySelectorAll(".single_item");
    const thisItem = this.parentNode;
    items.forEach(item => {
        if (thisItem == item) { 
            thisItem.classList.toggle("is-open");
            return;
        }
        item.classList.remove("is-open");
    })
}))