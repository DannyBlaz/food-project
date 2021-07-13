console.log("Feeling Good by Nina Simone")
// https://api.spoonacular.com/recipes/complexSearch
fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=a47d599a4f91434786ca05a8cd3f632f")
    .then(res => res.json())
    .then(json => console.log(json.results[0]))

// api key a47d599a4f91434786ca05a8cd3f632f

// https://spoonacular.sendybay.com/l/aNQ892MfCedsWZ2k3763aF763g5A/kmEkER6LKZ2ET5MBNiEW8A/d0x7mPt9iieyOxNkulYj0w