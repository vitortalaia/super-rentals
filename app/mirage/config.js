export default function() {
  this.get('/rentals', function(db, request) {
    let rentals = [
      {
        type: 'rentals',
        id: 'f55b33eb-fac1-4fd6-8c7b-5a76bc5c3c67',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      },
      {
        type: 'rentals',
        id: 'b177202c-4ae6-47ff-99a5-dc98599bc465',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike TV',
          city: 'Seattle',
          type: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      },
      {
        type: 'rentals',
        id: '114298c5-e39d-4347-a7b4-758cdfe4cf7e',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }
    ];

    if (request.queryParams.city !== undefined) {
      let desiredCity = request.queryParams.city.toLowerCase();
      let filteredRentals = rentals.filter((item) => {
        return item.attributes.city.toLowerCase().indexOf(desiredCity) !== -1;
      });

      return { data: filteredRentals };
    }

    return { data: rentals };
  });
}
