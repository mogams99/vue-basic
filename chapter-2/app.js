var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick !@#$% Brown 29'
    },
    computed: {
        slugetize: function() {
            console.warn(this);
            return this.slugText
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
        }
    }
})