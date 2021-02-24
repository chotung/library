class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
			t.array :duplicates
      t.timestamps
    end
  end
end
