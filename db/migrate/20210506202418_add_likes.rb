class AddLikes < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :posts do |t|
      t.index :user_id
      t.index :post_id
      t.index [:user_id, :post_id], unique: true
      t.timestamps
    end
  end
end
