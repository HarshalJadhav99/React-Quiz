const data = [
  {
    id: 1,
    question: "Where was the BRICS summit held in 2014?",
    answers: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "India",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which of these spices is the smallest in size?",
    answers: [
      {
        text: "Ajwain",
        correct: true,
      },
      {
        text: "Jeera",
        correct: false,
      },
      {
        text: "Saunf",
        correct: false,
      },
      {
        text: "Methi Seeds",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which battle in 1757 marked the beginning of British occupation in India?",
    answers: [
      {
        text: "Plassey",
        correct: true,
      },
      {
        text: "Assaye",
        correct: false,
      },
      {
        text: "Buxar",
        correct: false,
      },
      {
        text: "Cuddalore",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which is the second most spoken language of Nepal?",
    answers: [
      {
        text: "Bajjika",
        correct: false,
      },
      {
        text: "Nepali",
        correct: false,
      },
      {
        text: "Maithili",
        correct: true,
      },
      {
        text: "Bhojpuri",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        text: "Football, Squash",
        correct: false,
      },
      {
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        text: "Badminton, Cricket",
        correct: true,
      },
      {
        text: "Hockey, Cricket",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "What Los Angeles community is noted for celebrities and mansions?",
    answers: [
      {
        text: "Beverly Hills",
        correct: true,
      },
      {
        text: "Nob Hill",
        correct: false,
      },
      {
        text: "Chestnut Hill",
        correct: false,
      },
      {
        text: "Bunker Hill",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which country has the largest capacity reservoir in the world?",
    answers: [
      {
        text: "Uganda",
        correct: true,
      },
      {
        text: "Egypt",
        correct: false,
      },
      {
        text: "United States",
        correct: false,
      },
      {
        text: "Brazil",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "What U.S. state has the most counties?",
    answers: [
      {
        text: "Texas",
        correct: true,
      },
      {
        text: "California",
        correct: false,
      },
      {
        text: "Alabama",
        correct: false,
      },
      {
        text: "Minnesota",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: " Birds have two:",
    answers: [
      {
        text: "Stomachs",
        correct: true,
      },
      {
        text: "Livers",
        correct: false,
      },
      {
        text: "Hearts",
        correct: false,
      },
      {
        text: "Brains",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Iowa’s primary agricultural production can be characterized as…?",
    answers: [
      {
        text: "Feed grains and livestock",
        correct: true,
      },
      {
        text: "Range livestock",
        correct: false,
      },
      {
        text: "Truck and fruit farming",
        correct: false,
      },
      {
        text: "Dairying",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Forces are measured in units called:",
    answers: [
      {
        text: "Newtons",
        correct: true,
      },
      {
        text: "Kilograms",
        correct: false,
      },
      {
        text: "Joules",
        correct: false,
      },
      {
        text: "Grams",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Technically termed lipids,they are more commonly referred to as :",
    answers: [
      {
        text: "Fats",
        correct: true,
      },
      {
        text: " Enzymes",
        correct: false,
      },
      {
        text: "Calories",
        correct: false,
      },
      {
        text: "Vegetables",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Which verb does not mean to steal?",
    answers: [
      {
        text: "Proscribe",
        correct: true,
      },
      {
        text: "Purloin",
        correct: false,
      },
      {
        text: "Plunder",
        correct: false,
      },
      {
        text: "Pilfer",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Which is New Zealand’s largest city?",
    answers: [
      {
        text: "Christchurch",
        correct: false,
      },
      {
        text: "Queenstown",
        correct: false,
      },
      {
        text: "Wellington",
        correct: false,
      },
      {
        text: "Auckland",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "Which city averages the most sunshine each year (with 90% sunshine)?",
    answers: [
      {
        text: "Yuma, Arizona, U.S.A.",
        correct: true,
      },
      {
        text: "Alice Springs, Australia",
        correct: false,
      },
      {
        text: "Nairobi, Kenya",
        correct: false,
      },
      {
        text: "Papeete, Tahiti",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" , message:"Sorry Better Luck Next Time"},
  { id: 2, amount: "₹ 15000" , message:"Sorry Better Luck Next Time"},
  { id: 3, amount: "₹ 30000" , message:"Sorry Better Luck Next Time"},
  { id: 4, amount: "₹ 60000" , message:"Sorry Better Luck Next Time"},
  { id: 5, amount: "₹ 100000" , message:"Sorry Better Luck Next Time"},
  { id: 6, amount: "₹ 150000" , message:"Sorry Better Luck Next Time"},
  { id: 7, amount: "₹ 250000" , message:"Sorry Better Luck Next Time"},
  { id: 8, amount: "₹ 400000" , message:"Sorry Better Luck Next Time"},
  { id: 9, amount: "₹ 600000" , message:"Sorry Better Luck Next Time"},
  { id: 10, amount: "₹ 1000000" , message:"Sorry Better Luck Next Time"},
  { id: 11, amount: "₹ 5000000" , message:"Sorry Better Luck Next Time"},
  { id: 12, amount: "₹ 100000000" , message:"Sorry Better Luck Next Time"},
  { id: 13, amount: "₹ 300000000" , message:"Sorry Better Luck Next Time"},
  { id: 14, amount: "₹ 500000000" , message:"Sorry Better Luck Next Time"},
  { id: 15, amount: "₹ 1000000000" , message:"Sorry Better Luck Next Time"},
].reverse();

export { prizeMoney, data };
