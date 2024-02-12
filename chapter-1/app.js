var app = new Vue({
    el: '#app',
    data: {
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
    methods: {
        addItem: function(product) {
            console.warn(product);
            this.cart.push(product)
        }
    }
});