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
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex mt-5' : 'd-none';
        }
    },
    methods: {
        addItem: function(product) {
            console.warn(product);
            this.cart.push(product)
        }
    },
});