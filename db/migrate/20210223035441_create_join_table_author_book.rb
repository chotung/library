class CreateJoinTableAuthorBook < ActiveRecord::Migration[6.1]
  def change
    create_join_table :authors, :books do |t|
      # t.index [:author_id, :book_id]
      # t.index [:book_id, :author_id]
			t.index :author_id
      t.index :book_id
			# t.timestamps
    end
  end
end
