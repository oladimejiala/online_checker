// this section listens and search fr results on the menu list based on users queries
const marketsData = [
    {
       state: "Lagos",
        markets: [
            { name: "Ikeja market", location: "Ikeja, Lagos", peculiarity: "Textiles and fabrics" },
            { name: "Balogun market", location: " Lagos Island", peculiarity: "Largest Market in Nigeria" },
            { name: "Oyingbo market", location: "", peculiarity: "" },
            { name: "Oshodi market", location: "", peculiarity: "" },
            { name: "Mushin market", location: "", peculiarity: "Medical supplies, medical equipments, laboratory materials" },          
            { name: "Free Trade zone", location: "", peculiarity: "importation , buying and selling goods in U.S. Dollars, zero import/export tariff zone" },
            { name: "Iyana Ipaja market", location: "Iyana ipaja", peculiarity: "cheap clothings boh used and new" },
            { name: "Alaba international market", location: "Abule osun", peculiarity: "All electronics market, computers, mobile phones and accessories, musical instuments and accessories" },
            { name: "computer village market", location: "Ikeja", peculiarity: "electronics, mobile phones and computers sales, repairs and refurbishing" }
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
        state: "Oyo",
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


  // Function to generate HTML for markets
function generateMarketList() {
    var entryValue = document.getElementById("marketList").value;
    var result = document.getElementById('result');
    result.innerHTML = ""; // Clear previous results

    marketsData.forEach(state => {
        if (state.state.toLowerCase() == entryValue.toLowerCase()) {
            state.markets.forEach(market => {
                var marketInfo = document.createElement('ol');
                marketInfo.textContent = `Name: ${market.name}, Location: ${market.location}, Peculiarity: ${market.peculiarity}`;
                result.appendChild(marketInfo);
            });
        }
    });
    if (!result.innerHTML) {
            result.innerHTML = "Page not currently available! Please enter another destination in Nigeria";
        }
}

// Call the function to generate the market list
document.getElementById('marketList').addEventListener('input', function () {
	const input = this.value.trim(); // this will remove the reults
	if (input === ''){
		document.getElementById('result').innerHTML = '';
	}
} );
