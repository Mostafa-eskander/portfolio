// to top
let toTop = document.querySelector('.to_top');

window.onscroll = function () {
    let value = scrollY;
    if(value >= 112) {
        toTop.style.display = "flex";
    }else {
        toTop.style.display = "none";
    }
};

toTop.onclick = function () {
    window.scrollTo(0,0)
}


// header
let list = document.querySelectorAll('.list li a');

list.forEach((e) => {
    e.onclick = function() {
        list.forEach((e) => {
            e.classList.remove("active")
        }) 
        this.classList.add('active');
    }
});

// projects
fetch("js/json.json").then(
    response => response.json()
).then(
    data => {
        let work_container = document.querySelector('.work_container');

        all_products_json = data;

        data.forEach(product => {
            work_container.innerHTML += 
            `
                <div class="project">
                    <img src="${product.img}">
                    <div class="text">
                        <h4>${product.name}</h4>
                        <h5>skills:</h5>
                        <span>${product.skill}</span>
                        <br>
                        <a href="${product.link}">project ${product.id + 1}</a>
                    </div>
                </div>    
            `
        })
    }
)