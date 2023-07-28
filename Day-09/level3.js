// Exercises: Level 3 
// use countries_data.js file for countries list here i have mentioned just few 

const countries_data = [
	{
			"name": "Afghanistan",
			"capital": "Kabul",
			"languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
			
			"population": 40218234,
			"flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
			"region": "Asia",
			"area": 652230
	},
    {
        "name": "Albania",
        "capital": "Tirana",
        "languages": [
                "Albanian",
                "Pashto"
        ],
        "population": 2837743,
        "flag": "https://flagcdn.com/al.svg",
        "region": "Europe",
        "area": 28748
    },
	{
			"name": "Åland Islands",
			"capital": "Mariehamn",
			"languages": [
					"Swedish"
			],
			"population": 28875,
			"flag": "https://flagcdn.com/ax.svg",
			"region": "Europe",
			"area": 1580
	},
    {
        "name": "Algeria",
        "capital": "Algiers",
        "languages": [
                "Arabic"
        ],
        "population": 43851043,
        "flag": "https://flagcdn.com/dz.svg",
        "region": "Africa",
        "area": 2381741
},
{
        "name": "American Samoa",
        "capital": "Pago Pago",
        "languages": [
                "English",
                "Samoan"
        ],
        "population": 55197,
        "flag": "https://flagcdn.com/as.svg",
        "region": "Oceania",
        "area": 199
}

    ]
   
// 1 Use the countries information, in the data folder. Sort countries by name, by capital, by population
    
    let sortedByName = countries_data.map(o => o.name ); 
sortedByName.forEach(x =>console.log(x));

let sortByCapital=countries_data.sort((a,b)=>a.capital.toLowerCase(b.capital))
sortByCapital.forEach(x=>console.log(x))

let sortByPopulation=countries_data.sort((a,b)=>{ return b.population-a.population})
sortByPopulation.forEach(x=>console.log(x))


// 2 *** Find the 10 most spoken languages:
let mostSpoken = Object.entries(countries_data.reduce((langs, obj) => { obj.languages.forEach(x => langs.push(x));
    return langs;
 }, []).reduce((dict, lang) => {
    dict[lang] = (dict[lang] || 0) +1;
    return dict;
 }, {})).sort((a, b) => b[1]-a[1]);
 mostSpoken.forEach(x => console.log(x));


// 3 *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulated(country){
    let populetedCountry=country.sort((a,b)=>{return b.population-a.population})
    return populetedCountry
}
console.log(mostPopulated(countries_data))

