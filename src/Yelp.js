const apiKey = 'zUfbkT17yTWjgomUXlemmaBrgo2MUwlWNKzToskAKKZPRjT0OFC9g--Qe5vMGfK6DLJmEJ2p17K3dA7vqjjPA4MnM41q3y0TI8Q9ptz4u3Dr_mhjCfjuUU7u3LhCWnYx';

const Yelp = {
	search (term, location, sortBy){
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse.businesses){
				//console.log(jsonResponse.businesses);
				return jsonResponse.businesses.map( business => ({
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count
				}));
			}
		});
			}
		};

		export default Yelp;