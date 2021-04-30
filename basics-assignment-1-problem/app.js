const app = Vue.createApp({
    data() {
        return {
            myName: 'Katy',
            imageLink: 'https://static9.depositphotos.com/1000291/1113/i/600/depositphotos_11133127-stock-photo-goat-with-horn-at-green.jpg',
        };
    },
    methods: {
        myAge(birthDate) {
            const monthDiff = Date.now() - birthDate;
            //convert the calculated difference in date format  
            var age_dt = new Date(monthDiff);

            //extract year from date      
            var year = age_dt.getUTCFullYear();

            //now calculate the age of the user  
            var age = Math.abs(year - 1970);
            return age;

        },
        myAgePlusFive() {
            let age = this.myAge(743724000000)
            let fiveYears = age + 5;
            return (
                'I will be ' + fiveYears + ' in 5 Years'
            )
        },
        favoriteNumber() {
            let randomNumber = Math.random();
            return ('Favourite Number: ' + randomNumber);
        }
    },
});


app.mount('#assignment');