# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Toilet.destroy_all

Toilet.create({
  business_address: "US Botanic Garden",
  street: "100 Maryland Ave SW",
  city: "Washington",
  state: "DC",
  zip: "20224",
  cleanliness: 2,
  handicapped: true,
  lgbt_friendly: false,
  unisex: false,
  changing_table: true,
  rating: 4,
  wait_time: 0,
  description: "Located near the back entrance. If you enter through the main entrance, you need to pass through the jungle exhibit to find it. Generally pretty quiet except during festivals."
  })

  Toilet.create({
    business_address: "Museum of the American Indian",
    street: "4th St & Independence Ave SW",
    city: "Washington",
    state: "DC",
    zip: "20560",
    cleanliness:2,
    handicapped: true,
    lgbt_friendly: false,
    unisex: false,
    changing_table: true,
    rating: 3,
    wait_time: 0,
    description: "Located near the food court on the first floor. Rarely a wait unless it's lunch time."
    })

  Toilet.create({
    business_address: "National Air and Space Museum",
    street: "600 Independence Ave SW",
    city: "Washington",
    state: "DC",
    zip: "20560",
    cleanliness: 2,
    handicapped: true,
    lgbt_friendly: false,
    unisex: false,
    changing_table: false,
    rating: 3,
    wait_time: 5,
    description: "This museum is almost always busy, so there tends to be a line for the restroom."
    })

    Toilet.create({
      business_address: "Hirshorn Museum",
      street: "700 Independence Ave SW",
      city: "Washington",
      state: "DC",
      zip: "20560",
      cleanliness: 3,
      handicapped: true,
      lgbt_friendly: false,
      unisex: false,
      changing_table: false,
      rating: 4,
      wait_time: 0,
      description: "Located in the basement. Usually empty."
      })

    Toilet.create({
      business_address: "Smithsonian Castle",
      street: "1000 Jefferson Dr SW",
      city: "Washington",
      state: "DC",
      zip: "20560",
      cleanliness: 1,
      handicapped: true,
      lgbt_friendly: false,
      unisex: false,
      changing_table: true,
      rating: 2,
      wait_time: 5,
      description: "Use as a last option. Not cleaned often enough for the number of people using it each day."
      })

    Toilet.create({
      business_address: "Washington Monument ticket office",
      street: "2 15th St NW",
      city: "Washington",
      state: "DC",
      zip: "20024",
      cleanliness: 1,
      handicapped: false,
      lgbt_friendly: false,
      unisex: false,
      changing_table: false,
      rating: 1,
      wait_time: 5,
      description: "Small, crowded, not cleaned often enough."
      })
