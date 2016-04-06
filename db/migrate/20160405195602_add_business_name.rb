class AddBusinessName < ActiveRecord::Migration
  def change
    add_column :toilets, :business_name, :string
  end
end
