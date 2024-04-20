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
    {
        id: 21,
        title: "Hilltop Villa Retreat",
        picture: "https://images.unsplash.com/photo-1606788635679-6a4e2b9a7b07?q=80&w=450",
        description:
            "Escape to this luxurious 6-bedroom, 5-bathroom hilltop villa offering panoramic views of the surrounding countryside. With a private pool, spacious interiors, and lush gardens, this retreat is perfect for relaxation and entertainment.",
        tags: ["6 bedroom", "5 bathroom", "500 m²"],
        price: 1800000,
    },
    {
        id: 22,
        title: "Urban Oasis Penthouse",
        picture: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=450",
        description:
            "Live in luxury in this stunning 4-bedroom, 4-bathroom penthouse overlooking the city skyline. With a rooftop terrace, modern amenities, and access to exclusive amenities, this urban oasis offers sophistication and convenience.",
        tags: ["4 bedroom", "4 bathroom", "300 m²"],
        price: 1200000,
    },
    {
        id: 23,
        title: "Eco-Friendly Retreat",
        picture: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?q=80&w=450",
        description:
            "Experience sustainable living in this eco-friendly 3-bedroom, 2-bathroom home surrounded by lush greenery. Featuring solar panels, recycled materials, and a garden oasis, this retreat offers a harmonious blend of modern comforts and environmental consciousness.",
        tags: ["3 bedroom", "2 bathroom", "180 m²"],
        price: 500000,
    },
    {
        id: 24,
        title: "Lakeview Mansion",
        picture: "https://images.unsplash.com/photo-1618179223778-d75386dab95b?q=80&w=450",
        description:
            "Own a piece of paradise with this grand 12-bedroom, 10-bathroom mansion overlooking a tranquil lake. With sprawling grounds, a private dock, and luxurious interiors, this waterfront estate is perfect for discerning buyers seeking opulence and serenity.",
        tags: ["12 bedroom", "10 bathroom", "1200 m²"],
        price: 5000000,
    },
    {
        id: 25,
        title: "Sunny Coastal Cottage",
        picture: "https://images.unsplash.com/photo-1588411398011-504a5a94ff6b?q=80&w=450",
        description:
            "Enjoy coastal charm in this bright 2-bedroom, 1-bathroom cottage just minutes from the beach. With a sun-drenched patio, ocean breezes, and coastal decor, this retreat is ideal for weekend getaways and relaxation.",
        tags: ["2 bedroom", "1 bathroom", "90 m²"],
        price: 200000,
    },
    {
        id: 26,
        title: "Lakeside Log Cabin",
        picture: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=450",
        description:
            "Experience rustic elegance in this cozy 3-bedroom, 2-bathroom log cabin nestled by a serene lake. With a stone fireplace, private dock, and panoramic views, this cabin offers year-round comfort and outdoor adventures.",
        tags: ["3 bedroom", "2 bathroom", "160 m²"],
        price: 350000,
    },
    {
        id: 27,
        title: "Charming Vineyard Estate",
        picture: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=450",
        description:
            "Live the vineyard lifestyle in this charming 5-bedroom, 4-bathroom estate surrounded by rolling vineyards. With a wine cellar, panoramic views, and outdoor entertaining spaces, this property is perfect for wine enthusiasts and entertainers.",
        tags: ["5 bedroom", "4 bathroom", "400 m²"],
        price: 1500000,
    },
    {
        id: 28,
        title: "Sleek City Apartment",
        picture: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=450",
        description:
            "Embrace city living in this sleek 1-bedroom, 1-bathroom apartment with modern design and city views. Located in a vibrant neighborhood with access to amenities, this apartment offers convenience and style.",
        tags: ["1 bedroom", "1 bathroom", "70 m²"],
        price: 180000,
    },
    {
        id: 29,
        title: "Rural Farmhouse",
        picture: "https://images.unsplash.com/photo-1511437104182-eaac70da49b5?q=80&w=450",
        description:
            "Experience country living in this spacious 4-bedroom, 3-bathroom farmhouse surrounded by farmland. With a wrap-around porch, barn, and expansive views, this property is perfect for those seeking a rural lifestyle.",
        tags: ["4 bedroom", "3 bathroom", "280 m²"],
        price: 400000,
    },
    {
        id: 30,
        title: "Luxury Skyline Penthouse",
        picture: "https://images.unsplash.com/photo-1568391300292-a5a1d96b82aa?q=80&w=450",
        description:
            "Live in the lap of luxury in this expansive 5-bedroom, 5-bathroom penthouse with breathtaking city views. Featuring high-end finishes, a private elevator, and rooftop terrace, this penthouse offers unparalleled sophistication and exclusivity.",
        tags: ["5 bedroom", "5 bathroom", "500 m²"],
        price: 3000000,
    },
    {
        id: 31,
        title: "Serenity Lake House",
        picture: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=450",
        description:
            "Find tranquility in this charming 3-bedroom, 2-bathroom lake house with stunning views. Enjoy fishing, boating, and lakeside living right from your doorstep, perfect for a peaceful getaway.",
        tags: ["3 bedroom", "2 bathroom", "180 m²"],
        price: 350000,
    },
    {
        id: 32,
        title: "Elegant Riverside Mansion",
        picture: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=450",
        description:
            "Live in grandeur in this elegant 9-bedroom, 7-bathroom mansion overlooking a picturesque river. With expansive grounds, a private dock, and luxurious interiors, this mansion offers a timeless and luxurious lifestyle.",
        tags: ["9 bedroom", "7 bathroom", "900 m²"],
        price: 5000000,
    },
    {
        id: 33,
        title: "Chic Urban Studio",
        picture: "https://images.unsplash.com/photo-1587145198532-d63b9ffe5692?q=80&w=450",
        description:
            "Experience city living in style in this chic 1-bedroom studio apartment. With modern amenities, a cozy layout, and proximity to urban attractions, this studio is perfect for urban professionals and students.",
        tags: ["1 bedroom", "1 bathroom", "40 m²"],
        price: 120000,
    },
    {
        id: 34,
        title: "Tranquil Forest Cabin",
        picture: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=450",
        description:
            "Escape to nature in this peaceful 2-bedroom, 1-bathroom forest cabin surrounded by towering trees. With hiking trails, wildlife sightings, and a serene atmosphere, this cabin offers a true retreat from city life.",
        tags: ["2 bedroom", "1 bathroom", "100 m²"],
        price: 180000,
    },
    {
        id: 35,
        title: "Historic City Manor",
        picture: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=450",
        description:
            "Own a piece of history with this exquisite 7-bedroom, 5-bathroom manor house in the heart of the city. Featuring period details, expansive gardens, and a central location, this manor offers timeless elegance and convenience.",
        tags: ["7 bedroom", "5 bathroom", "600 m²"],
        price: 2800000,
    },
    {
        id: 36,
        title: "Modern Lakeside Retreat",
        picture: "https://images.unsplash.com/photo-1568391300292-a5a1d96b82aa?q=80&w=450",
        description:
            "Indulge in lakeside living in this modern 4-bedroom, 3-bathroom retreat with panoramic views. With a private dock, outdoor entertaining spaces, and sleek interiors, this property is perfect for lake enthusiasts.",
        tags: ["4 bedroom", "3 bathroom", "280 m²"],
        price: 750000,
    },
    {
        id: 37,
        title: "Sunny Coastal Villa",
        picture: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?q=80&w=450",
        description:
            "Enjoy coastal living in this sunny 4-bedroom, 4-bathroom villa with ocean views. Featuring a pool, tropical gardens, and outdoor lounging areas, this villa offers the perfect blend of relaxation and luxury.",
        tags: ["4 bedroom", "4 bathroom", "350 m²"],
        price: 1400000,
    },
    {
        id: 38,
        title: "Mountain View Lodge",
        picture: "https://images.unsplash.com/photo-1588411398011-504a5a94ff6b?q=80&w=450",
        description:
            "Experience mountain charm in this cozy 2-bedroom, 1-bathroom lodge with stunning views. Surrounded by nature, this lodge offers hiking trails, wildlife sightings, and a peaceful atmosphere.",
        tags: ["2 bedroom", "1 bathroom", "90 m²"],
        price: 220000,
    },
    {
        id: 39,
        title: "Coastal Paradise Home",
        picture: "https://images.unsplash.com/photo-1588411398011-504a5a94ff6b?q=80&w=450",
        description:
            "Live in paradise in this luxurious 5-bedroom, 5-bathroom coastal home with direct beach access. Featuring high-end finishes, expansive decks, and ocean vistas, this home is perfect for beach lovers.",
        tags: ["5 bedroom", "5 bathroom", "400 m²"],
        price: 2200000,
    },
    {
        id: 40,
        title: "Charming Countryside Cottage",
        picture: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=450",
        description:
            "Experience country living in this charming 3-bedroom, 2-bathroom cottage surrounded by rolling hills. With a cozy fireplace, spacious gardens, and panoramic views, this cottage offers serenity and charm.",
        tags: ["3 bedroom", "2 bathroom", "150 m²"],
        price: 320000,
    },
    {
        id: 41,
        title: "Tranquil Mountain Chalet",
        picture: "https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?q=80&w=450",
        description:
            "Find peace in this serene 3-bedroom, 2-bathroom mountain chalet surrounded by pine trees. With a hot tub, cozy interiors, and mountain views, this chalet offers a perfect retreat from city life.",
        tags: ["3 bedroom", "2 bathroom", "160 m²"],
        price: 400000,
    },
    {
        id: 42,
        title: "Modern Beachfront Condo",
        picture: "https://images.unsplash.com/photo-1587145198532-d63b9ffe5692?q=80&w=450",
        description:
            "Experience luxury living in this modern 3-bedroom, 3-bathroom beachfront condo with panoramic ocean views. Featuring resort-style amenities, sleek interiors, and beach access, this condo offers the ultimate coastal lifestyle.",
        tags: ["3 bedroom", "3 bathroom", "200 m²"],
        price: 900000,
    },
    {
        id: 43,
        title: "Historic Townhouse",
        picture: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=450",
        description:
            "Step into history with this elegant 5-bedroom, 4-bathroom historic townhouse. Featuring period details, a private courtyard, and city views, this townhouse offers a blend of old-world charm and modern comforts.",
        tags: ["5 bedroom", "4 bathroom", "300 m²"],
        price: 1200000,
    },
    {
        id: 44,
        title: "Sustainable Farmhouse",
        picture: "https://images.unsplash.com/photo-1586727568950-92b60d70fd69?q=80&w=450",
        description:
            "Live sustainably in this charming 4-bedroom, 3-bathroom farmhouse surrounded by organic gardens. Featuring solar power, rainwater harvesting, and farm-to-table living, this farmhouse offers a greener way of life.",
        tags: ["4 bedroom", "3 bathroom", "250 m²"],
        price: 600000,
    },
    {
        id: 45,
        title: "Urban Industrial Loft",
        picture: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?q=80&w=450",
        description:
            "Embrace industrial chic in this stylish 2-bedroom, 2-bathroom loft in the heart of the city. With exposed brick walls, high ceilings, and modern amenities, this loft offers a trendy urban living experience.",
        tags: ["2 bedroom", "2 bathroom", "120 m²"],
        price: 500000,
    },
    {
        id: 46,
        title: "Secluded Mountain Lodge",
        picture: "https://images.unsplash.com/photo-1588411398011-504a5a94ff6b?q=80&w=450",
        description:
            "Escape to seclusion in this cozy 2-bedroom, 1-bathroom mountain lodge surrounded by forests. With a wood-burning fireplace, scenic trails, and wildlife sightings, this lodge offers a peaceful mountain getaway.",
        tags: ["2 bedroom", "1 bathroom", "100 m²"],
        price: 250000,
    },
    {
        id: 47,
        title: "Luxury Riverside Villa",
        picture: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?q=80&w=450",
        description:
            "Indulge in luxury in this exquisite 6-bedroom, 5-bathroom riverside villa with landscaped gardens. Featuring a pool, outdoor dining areas, and river views, this villa offers an idyllic retreat for relaxation and entertainment.",
        tags: ["6 bedroom", "5 bathroom", "400 m²"],
        price: 1800000,
    },
    {
        id: 48,
        title: "Rustic Lakeside Cabin",
        picture: "https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=450",
        description:
            "Experience lakeside charm in this rustic 3-bedroom, 2-bathroom cabin with a private dock. Surrounded by woods and wildlife, this cabin offers fishing, boating, and peaceful lake views.",
        tags: ["3 bedroom", "2 bathroom", "120 m²"],
        price: 300000,
    },
    {
        id: 49,
        title: "Luxurious Mountain Retreat",
        picture: "https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=450",
        description:
            "Indulge in luxury in this stunning 5-bedroom, 4-bathroom mountain retreat with panoramic views. Featuring a spa, home theater, and expansive decks, this retreat offers a perfect blend of relaxation and entertainment.",
        tags: ["5 bedroom", "4 bathroom", "350 m²"],
        price: 2200000,
    },
    {
        id: 50,
        title: "Seaside Paradise Villa",
        picture: "https://images.unsplash.com/photo-1559329145-afaf18e3f349?q=80&w=450",
        description:
            "Live in paradise in this luxurious 4-bedroom, 4-bathroom seaside villa with private beach access. Featuring infinity pool, tropical gardens, and oceanfront views, this villa offers the ultimate coastal lifestyle.",
        tags: ["4 bedroom", "4 bathroom", "400 m²"],
        price: 1600000,
    },
    {
        id: 51,
        title: "Secluded Forest Retreat",
        picture: "https://images.unsplash.com/photo-1580494767366-82f4e74f5655?w=450",
        description:
            "Find peace and quiet in this secluded 1-bedroom, 1-bathroom cabin nestled deep in the forest. Surrounded by trees and wildlife, this off-grid retreat is perfect for those seeking solitude and communion with nature.",
        tags: ["1 bedroom", "1 bathroom", "60 m²"],
        price: 150000,
    },
    {
        id: 52,
        title: "Beachside Condo",
        picture: "https://images.unsplash.com/photo-1564544288832-69d4014cc1f6?w=450",
        description:
            "Enjoy coastal living in this stylish 2-bedroom, 2-bathroom condo just steps from the beach. With ocean views, resort-style amenities, and a vibrant seaside community, this property offers the ultimate beach lifestyle.",
        tags: ["2 bedroom", "2 bathroom", "100 m²"],
        price: 400000,
    },
];
