import JomolhariTrekImage from "@/public/jomolhari-trek.png";

export const packageData = [
  {
    title: "Jomolhari Festival Trek",
    packageDuration: "4N5D",
    packageFee: "Nu. 41,000/-",
    difficulty: "Moderate",
    groupSize: "3 people",
    image: JomolhariTrekImage,
    trekOverview:
      "This is a 5-day trekking package for a group of 3 people that includes the opportunity to rest and enjoy the Jomolhari Snow Leopard Festival on Day 3. The itinerary follows a route along the Paro Chu River and reaches high altitudes, culminating in superb views of Mounts Jomolhari and Jichudrakey.",
    itineraryOverview: [
      {
        day: 1,
        place: "Shana to Thangthangkha",
        description:
          "Distance: 17km, Duration: 6 hours, Altitude: 2810m to 3610m",
        keyActivity:
          "Trek along the Paro Chu River (fascinating views); must show a trek permit at the military area.",
      },
      {
        day: 2,
        place: "Thangthangkha to Jangothang",
        description:
          "Distance: 19km, Duration: 6 hours, Altitude: Ascends to 3610m",
        keyActivity:
          "See a series of giant peaks; superb view of Mounts Jomolhari and Jichudrakey upon arrival; lunch at a herders' camp.",
      },
      {
        day: 3,
        place: "Jomolhari Mountain Festival (Rest Day)",
        description: "",
        keyActivity:
          "Rest day to enjoy the Jomolhari Snow Leopard Festival at the community center with authentic dances and shows.",
      },
      {
        day: 4,
        place: "Sightseeing (Rest Day)",
        description: "",
        keyActivity:
          "Sightseeing of a twin lake, Mt. Jomolhari & Mt. Jichudrakey; may visit other lakes if time permits.",
      },
      {
        day: 5,
        place: "Jangothang to Shana (Return)",
        description: "",
        keyActivity:
          "Early start (around 7 am); 7-8 hours to reach Shana base, then transfer back to Paro or Thimphu.",
      },
    ],
    packagePricing: {
      header: "For 3 pax",
      tableContain: [
        {
          item: "Luxury Trekking",
          noOfPeople: 3,
          amount: 100500,
        },
        {
          item: "Trekking Guide",
          noOfPeople: 1,
          amount: 22500,
        },
      ],
      pricingPerHead: "Nu. 41,000/-",
    },
    exclusive: [
      "Riding Horse: (USD 24/day if arranged).",
      "Personal Gear: Trekking gears.",
      "Drinks: Alcohol.",
      "Expenses: Travel insurance and other personal expenses (laundry, tips, souvenirs).",
    ],
  },
];
