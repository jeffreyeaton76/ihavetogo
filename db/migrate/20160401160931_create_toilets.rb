class CreateToilets < ActiveRecord::Migration
  def change
    create_table :toilets do |t|
      t.string  :street
      t.string  :city
      t.string  :state
      t.string  :zip
      t.integer :cleanliness
      t.boolean :handicapped
      t.boolean :lgbt_friendly
      t.boolean :unisex
      t.boolean :changing_table
      t.integer :rating
      t.string :wait_time
      t.string  :description

      t.timestamps null: false
    end
  end
end
