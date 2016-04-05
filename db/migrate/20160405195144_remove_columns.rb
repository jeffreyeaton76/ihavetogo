class RemoveColumns < ActiveRecord::Migration
  def change
    remove_column :toilets, :street
    remove_column :toilets, :city
    remove_column :toilets, :state
    remove_column :toilets, :zip
  end
end
