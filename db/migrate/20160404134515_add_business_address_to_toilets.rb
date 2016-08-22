class AddBusinessAddressToToilets < ActiveRecord::Migration
  def change
    add_column :toilets, :business_address, :string
  end
end

# Before you move to production, I'd say just directly edit existing migrations instead of creating new ones
