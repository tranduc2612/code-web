const btnScrollTop = document.querySelector('.back-to-top') 
const Loader = document.querySelector('.loader__wrap')
const productList = document.querySelector('.list__product')

const data = [
    {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    },
    {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }, {
        img:'../img//AllProduct/Fittonia.jpg',
        name:'Fittonia',
        currentPrice:'$20.34',
        oldPrices:'$24.45',
    }
]

const app={

    render:function(){
        const htmls = data.map(e=>{
            return `
                <a class="home__product-item col l-4 m-4 c-6" href="product.html" >                                   
                    <div class="home__product-item__img" style="background-image: url(${e.img});">
                    </div>
                    <div class="home__product-item__action">
                        <div class="home__product-item__rating">
                            <input type="radio" name="produce1" id="1__star5" value="5">
                            <label for="1__star5" class="fas fa-star"></label>
                            <input type="radio" name="produce1" id="1__star4" value="4">
                            <label for="1__star4" class="fas fa-star"></label>
                            <input type="radio" name="produce1" id="1__star3" value="3">
                            <label for="1__star3" class="fas fa-star"></label>
                            <input type="radio" name="produce1" id="1__star2" value="2">
                            <label for="1__star2" class="fas fa-star"></label>
                            <input type="radio" name="produce1" id="1__star1" value="1">
                            <label for="1__star1" class="fas fa-star"></label>
                        </div>
                    </div>
                    <p class="home__product-item__name">${e.name}</p>
                    <div class="home__product-item__price">
                        <span class="home__product-item__price-current">${e.currentPrice}</span>
                        <span class="home__product-item__price-old">${e.oldPrices}</span>                 
                    </div>
                </a>`
        })

        productList.innerHTML = htmls.join('');
    },

    loadPage:function(){
        window.onload = function(){
            setTimeout(()=>{
                Loader.style.opacity = "0"
            },2000)
            Loader.style.display = "none"
        }
    },

    handleEvent:function(){
        btnScrollTop.addEventListener('click',()=>{
            console.log(window)
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        })
    },

    start:function(){
        this.loadPage()

        this.render()

        this.handleEvent()

    }
}

app.start()