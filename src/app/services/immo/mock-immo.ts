export let IMMO = [
    {
        id: 1,
        name: "Mon petit Paris",
        rating: 5,
        price: 450,
        location: {
            lat: -22.906847,
            lng: -43.172896,
        },
        address: "Av Pres. Antônio Carlos, 223",
        description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
        location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
        thumb: "assets/img/appartement_1.jpg",
        images: [
            "assets/img/appartement_1.jpg",
            "assets/img/appartement_2.jpg",
            "assets/img/appartement_3.jpg",
            "assets/img/appartement_4.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 3,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 4,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 2,
        name: "Mon grand Paris",
        rating: 5,
        price: 450,
        location: {
            lat: -22.906847,
            lng: -43.172896,
        },
        address: "Av Pres. Antônio Carlos, 223",
        description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
        location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
        thumb: "assets/img/appartement_2.jpg",
        images: [
            "assets/img/appartement_3.jpg",
            "assets/img/appartement_1.jpg",
            "assets/img/appartement_2.jpg",
            "assets/img/appartement_4.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 3,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 4,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/appartement_3.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/appartement_3.jpg",
                price: 180
            },
        ]
    }
]
