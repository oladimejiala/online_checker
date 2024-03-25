// this section listens and search fr results on the menu list based on users queries
const marketData = [
    {
       "state": "lagos",
        markets: [
            { name: "Ikeja market", location: "Ikeja, Lagos", peculiarity: "Textiles and fabrics" },
            { name: "Balogun market", location: " Lagos Island", peculiarity: "Largest Market in Nigeria" },
            { name: "Oyingbo market", location: "", peculiarity: "" },
            { name: "Oshodi market", location: "", peculiarity: "" },
            { name: "Mushin market", location: "", peculiarity: "Medical supplies, medical equipments, laboratory materials" },          
            { name: "Free Trade zone", location: "", peculiarity: "importation , buying and selling goods in U.S. Dollars, zero import/export tariff zone" },
            { name: "Iyana Ipaja market", location: "Iyana ipaja", peculiarity: "cheap clothings boh used and new" },
            { name: "Alaba international market", location: "Abule osun", peculiarity: "All electronics market, computers, mobile phones and accessories, musical instuments and accessories" },
            { name: "computer village market", location: "Ikeja", peculiarity: "electronics, mobile phoens and computers sales, repairs and refurbishing" }
        ]
    },

    {
        state: "Kano",
        markets: [
            { name: "Kurmi market", location: "kano city", peculiarity: "traditional crafts and spices" },
            { name: "Sabon gari market", location: "Kano cit, kano", peculiarity: "textiles and garments" }
            // add more markets in kano as needed.
    ]
},

{
    state: "Oyo state",
        markets: [
            { name: "Bodija market", location: " Bodija Ibadan", peculiarity: "Largest foodstuff market in Ibadan" },
            { name: "Aleshinloye market", location: "Aleshinloye Ibadan", peculiarity: "Good quality clothing and textiles, bulk sales Kitchen Utensils/wares" },
            { name: "Gbagi market/Gbagi titun/gbagi atijo", location: "Gbagi, Ibadan", peculiarity: "Good quality clothing and textiles,Agricultural produce and livestock" },
            { name: "Ogunpa market", location: "Ogun" },
            { name: "Dugbe Alawo Market", locaton: " Dugbe, Ibadan", peculiarity: "Bulk sales of kitchen wares, ready made clothings and household stuffs"},
            { name: "Gate market", location: "gate, Ibadan", peculiarity: " largest market for automobile spare parts Southwest Nigeria"}
        // add more market in Oyo state as the case may be
        ]
}
];


// function that will generate a list of market for users

function generateMarketList() {
    const entryValue = document.getElementById('barInput').value;
    if (entryValue in marketData) {
        const stateHeading = document.createElement("h2");
        stateHeading.textContent = marketData.state;
        // marketListDiv.appendChild(stateHeading);
        document.getElementById('result').innerHTML = marketData.state, marketData.markets
        }
    console.log(entryValue.appendChild(stateHeading));  
    stateHeading
        
};        
// call the function to generte the market list
generateMarketList()



// use of input search

// const input = document.getElementById('barInput').value;

// if (input in marketData) {
//     document.getElementById('result').innerHTML = marketData.state, marketData.location, marketData.peculiarity
// } else {
//     document.getElementById('result').innerHTML = "Your querry cannot be found"
// }


// clear entry
document.getElementById('barInput').addEventListener('input', function () {
	const input = this.value.trim(); // this will remove the reults
	if (input === ''){
		document.getElementById('result').innerHTML = '';
	}
} );
