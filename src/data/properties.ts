export interface Property {
    id: number;
    title: string;
    picture: string;
    description: string;
    tags: string[];
    price: number;
}

export const properties: Property[] = [
    {
        id: 1,
        title: "Seaside Serenity Villa",
        picture: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=450",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood offering breathtaking views of the ocean. This spacious villa boasts modern amenities and a beautifully landscaped garden.",
        tags: ["4 bedroom", "3 bathroom", "130 m²"],
        price: 750000,
    },
    {
        id: 2,
        title: "Mountain Retreat Chalet",
        picture: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=450",
        description:
            "Escape to this charming 3-bedroom, 2-bathroom chalet nestled in the heart of the mountains. Enjoy the tranquility of nature with hiking trails right at your doorstep and panoramic mountain views from the spacious deck.",
        tags: ["3 bedroom", "2 bathroom", "180 m²"],
        price: 450000,
    },
    {
        id: 3,
        title: "Urban Chic Loft",
        picture: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=450",
        description:
            "Live in style in this chic loft apartment located in the vibrant city center. Featuring 2 bedrooms, 1 bathroom, and an open-concept living space with exposed brick walls and high ceilings, this urban oasis is perfect for those seeking a trendy lifestyle.",
        tags: ["2 bedroom", "1 bathroom", "100 m²"],
        price: 300000,
    },
    {
        id: 4,
        title: "Countryside Cottage",
        picture: "https://images.unsplash.com/photo-1602075432748-82d264e2b463?w=450",
        description:
            "Experience the charm of country living in this cozy 2-bedroom, 1-bathroom cottage surrounded by rolling hills and lush greenery. The perfect retreat for those craving peace and serenity.",
        tags: ["2 bedroom", "1 bathroom", "120 m²"],
        price: 200000,
    },
    {
        id: 5,
        title: "Luxury Beachfront Villa",
        picture: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=450",
        description:
            "Indulge in luxury living with this exquisite 5-bedroom, 4-bathroom beachfront villa. Boasting panoramic views of the sea, a private infinity pool, and direct beach access, this property offers the ultimate in coastal living.",
        tags: ["5 bedroom", "4 bathroom", "350 m²"],
        price: 1200000,
    },
    {
        id: 6,
        title: "Ski Chalet Retreat",
        picture: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=450",
        description:
            "Embrace winter wonderland in this charming 4-bedroom, 3-bathroom ski chalet. With ski-in/ski-out access to the slopes, a cozy fireplace, and stunning mountain views, this retreat is perfect for avid skiers and snowboarders.",
        tags: ["4 bedroom", "3 bathroom", "200 m²"],
        price: 800000,
    },
    {
        id: 7,
        title: "Modern City Penthouse",
        picture: "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?w=450",
        description:
            "Experience urban sophistication in this sleek 3-bedroom, 2-bathroom penthouse apartment. Located in the heart of the city, this modern residence features floor-to-ceiling windows, a rooftop terrace, and access to top-notch amenities.",
        tags: ["3 bedroom", "2 bathroom", "180 m²"],
        price: 600000,
    },
    {
        id: 8,
        title: "Riverside Estate",
        picture: "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=450",
        description:
            "Escape to nature with this picturesque 6-bedroom, 5-bathroom riverside estate. Set on sprawling grounds with lush gardens and a private dock, this property offers serenity and seclusion just minutes from the city.",
        tags: ["6 bedroom", "5 bathroom", "400 m²"],
        price: 1500000,
    },
    {
        id: 9,
        title: "Historic Manor House",
        picture: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=450",
        description:
            "Step back in time with this historic 8-bedroom, 6-bathroom manor house. Featuring elegant architecture, antique furnishings, and manicured gardens, this stately home offers a glimpse into the past.",
        tags: ["8 bedroom", "6 bathroom", "600 m²"],
        price: 2500000,
    },
    {
        id: 10,
        title: "Lakefront Cabin",
        picture: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=450",
        description:
            "Unwind in this cozy 2-bedroom, 1-bathroom lakefront cabin surrounded by tranquil forests and pristine waters. Ideal for nature lovers, this retreat offers fishing, boating, and hiking right at your doorstep.",
        tags: ["2 bedroom", "1 bathroom", "80 m²"],
        price: 300000,
    },
    {
        id: 11,
        title: "Contemporary Townhouse",
        picture: "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=450",
        description:
            "Live in style in this contemporary 4-bedroom, 3-bathroom townhouse located in a vibrant neighborhood. With sleek design, modern amenities, and proximity to shops and restaurants, this urban residence offers the best of city living.",
        tags: ["4 bedroom", "3 bathroom", "220 m²"],
        price: 700000,
    },
    {
        id: 12,
        title: "Mountain View Cottage",
        picture: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=450",
        description:
            "Escape to the mountains in this charming 3-bedroom, 2-bathroom cottage with breathtaking views. Surrounded by nature, this cozy retreat features a wood-burning fireplace and a spacious deck for enjoying the outdoors.",
        tags: ["3 bedroom", "2 bathroom", "150 m²"],
        price: 400000,
    },
    {
        id: 13,
        title: "City Center Apartment",
        picture: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=450",
        description:
            "Experience cosmopolitan living in this stylish 2-bedroom, 2-bathroom apartment in the heart of the city. With trendy cafes, shops, and cultural attractions just steps away, this urban oasis offers convenience and comfort.",
        tags: ["2 bedroom", "2 bathroom", "120 m²"],
        price: 350000,
    },
    {
        id: 14,
        title: "Secluded Forest Retreat",
        picture: "https://images.unsplash.com/photo-1580494767366-82f4e74f5655?w=450",
        description:
            "Find peace and quiet in this secluded 1-bedroom, 1-bathroom cabin nestled deep in the forest. Surrounded by trees and wildlife, this off-grid retreat is perfect for those seeking solitude and communion with nature.",
        tags: ["1 bedroom", "1 bathroom", "60 m²"],
        price: 150000,
    },
    {
        id: 15,
        title: "Luxurious Downtown Loft",
        picture: "https://images.unsplash.com/photo-1577842041275-2da5ff5d6c23?w=450",
        description:
            "Live in luxury in this spacious 3-bedroom, 2-bathroom loft located in the heart of the city. With high-end finishes, expansive windows, and views of the skyline, this urban retreat offers sophistication and style.",
        tags: ["3 bedroom", "2 bathroom", "200 m²"],
        price: 900000,
    },
    {
        id: 16,
        title: "Cozy Countryside Bungalow",
        picture: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=450",
        description:
            "Escape the hustle and bustle in this charming 2-bedroom, 1-bathroom bungalow nestled in the countryside. Surrounded by rolling hills and peaceful farmland, this cozy retreat is the perfect place to unwind.",
        tags: ["2 bedroom", "1 bathroom", "100 m²"],
        price: 250000,
    },
    {
        id: 17,
        title: "Historic Waterfront Mansion",
        picture: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=450",
        description:
            "Own a piece of history with this grand 10-bedroom, 8-bathroom mansion overlooking the waterfront. Built in the 19th century, this stately home features ornate architecture, expansive gardens, and stunning views.",
        tags: ["10 bedroom", "8 bathroom", "800 m²"],
        price: 3500000,
    },
    {
        id: 18,
        title: "Modern Suburban Home",
        picture: "https://images.unsplash.com/photo-1602895931791-d78ac88edc7b?w=450",
        description:
            "Experience suburban living at its finest in this modern 4-bedroom, 3-bathroom home. With an open-concept floor plan, gourmet kitchen, and landscaped backyard, this property is perfect for families and entertainers alike.",
        tags: ["4 bedroom", "3 bathroom", "250 m²"],
        price: 600000,
    },
    {
        id: 19,
        title: "Rustic Mountain Cabin",
        picture: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=450",
        description:
            "Get away from it all in this charming 2-bedroom, 1-bathroom cabin nestled in the mountains. With a cozy fireplace, wooden interiors, and stunning views, this retreat is ideal for nature lovers and outdoor enthusiasts.",
        tags: ["2 bedroom", "1 bathroom", "120 m²"],
        price: 300000,
    },
    {
        id: 20,
        title: "Beachside Condo",
        picture: "https://images.unsplash.com/photo-1564544288832-69d4014cc1f6?w=450",
        description:
            "Enjoy coastal living in this stylish 2-bedroom, 2-bathroom condo just steps from the beach. With ocean views, resort-style amenities, and a vibrant seaside community, this property offers the ultimate beach lifestyle.",
        tags: ["2 bedroom", "2 bathroom", "100 m²"],
        price: 400000,
    },
];
