# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Toilet.destroy_all

Toilet.create({
  street: "100 Maryland Ave SW",
  city: "Washington",
  state: "DC",
  zip: "20224",
  cleanliness: 4,
  handicapped: true,
  lgbt_friendly: false,
  unisex: false,
  changing_table: true,
  rating: 4,
  wait_time: 0,
  description: "Located near the back entrance. If you enter through the main entrance, you need to pass through the jungle exhibit to find it. Generally pretty quiet except during festivals."
  })

  Toilet.create({
    street: "4th St & Independence Ave SW",
    city: "Washington",
    state: "DC",
    zip: "20560",
    cleanliness: 4,
    handicapped: true,
    lgbt_friendly: false,
    unisex: false,
    changing_table: true,
    rating: 3,
    wait_time: 0,
    description: "Located near the food court on the first floor. Rarely a wait unless it's lunch time."
    })
