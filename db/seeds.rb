# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Product.destroy_all

User.create(name: "Kolt")
Product.create(user_id: 3, name: "Large Agave", image: "https://pics.davesgarden.com/pics/2010/05/07/palmbob/394a33.jpg", description: "Large Agave")
Product.create(user_id: 3, name: "Medium Agave", image: "https://pics.davesgarden.com/pics/2010/05/07/palmbob/394a33.jpg", description: "Medium Agave")
Product.create(user_id: 3, name: "Small Agave", image: "https://pics.davesgarden.com/pics/2010/05/07/palmbob/394a33.jpg", description: "Small Agave")