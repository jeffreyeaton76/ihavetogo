class AddBusinessAddressToToilets < ActiveRecord::Migration
  def change
    add_column :toilets, :business_address, :string
  end
end
