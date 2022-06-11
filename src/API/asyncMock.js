const products = [
	{
	id: "1",
	name : "The blade itself",
	description: "Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, he’s on the verge of becoming a dead barbarian – leaving nothing behind him but bad songs, dead friends, and a lot of happy enemies.",
	price : "4000",
	img : "https://m.media-amazon.com/images/I/51bOdgp6-wL.jpg",
	category: "fantasia"},
	
	{
		id: "2",
		name : "Red, white and royal blue",
		description: "First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep’s genius granddaughter, they’re the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont. International socialite duties do have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations. The plan for damage control: staging a fake friendship between the First Son and the Prince.",
		price : "4200",
		img : "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/2503/9781250316776.jpg",
		category: "romance"
		},
		{
			id: "3",
			name : "The shining",
			description: "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
			price : "3500",
			img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m6XjmKm1b0Ym_D6H6yLFtmr3EJJm6qXAFg&usqp=CAU",category: "terror"
			},
			{
				id: "4",
				name : "Ancient History",
				description: "Read about the 50 most important events in ancient history, from the first civilizations to the fall of the Roman Empire.",
				price : "3200",
				img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUKwcOqLe7TpjeR-Kyhovj18ehOVd8Pn2eB_zom6MwOEfdwo7a0m-2QpDoz0x29tB6R8&usqp=CAU",
				category: "historia"
				},
	
	
	
	]

export const getProducts = () => {
	return new Promise((res,rej) => {
		setTimeout(()=> {
			res(products)},2000)
		})
	}


	export const getProductByID = (id) => {
		return new Promise((res,rej) => {
			setTimeout(()=> {
				res(products.find(products => products.id === id))},2000)
			})
		}

		export const getProductByCategory = (categoryId) => {
			return new Promise((res,rej) => {
				setTimeout(()=> {
					res(products.filter(products => products.category=== categoryId))},2000)
				})
			}