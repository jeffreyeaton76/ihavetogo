class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string  :content

      t.references :toilet, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
