Vue.component('price', {
    data: function() {
        return {}
    },
    props: ['value', 'prefix', 'precision'],
    template: '<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>'
});

var app = new Vue({
    el: '#app',
    data: {
        style: {
            label: ['fw-bold', 'mr-2'],
            inputWidth: 60,
            sliderStatus: false,
        },
        maximum: 50,
        imgClass: 'img-fluid d-block',
        products: null,
        cart: [],
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
    filters: {
        currencyFormat: function (value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2);
        }
    },
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex mt-5' : 'd-none';
        },
        cartTotal: function() {
            let sum = 0;
            for (key in this.cart)  {
                sum = sum + (this.cart[key].product.price * this.cart[key].qty);
            }
            return sum;
        },
        cartQty: function() {
            let qty = 0;
            for (key in this.cart)  {
                qty = qty + this.cart[key].qty;
            }
            return qty;
        },
    },
    methods: {
        before: function(el) {
            el.className = 'd-none';
        },
        enter: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeInRight'
            }, delay);
        },
        leave: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight'
            }, delay);
        },
        addItem: function(product) {
            console.warn(product.id);

            var productIndex;
            var productExist = this.cart.filter(function(item, index) {
                if (item.product.id == Number(product.id)) {
                    productIndex = index;
                    return true;
                } else {
                    return false;
                }
            });

            if (productExist.length) {
                this.cart[productIndex].qty++
            } else {
                this.cart.push({product: product, qty: 1});
            }
        },
        deleteItem: function(product) {
            if (this.cart[key].qty > 1) {
                this.cart[key].qty--;
            } else {
                this.cart.splice(key, 1);
            }
        }
    },
});