class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :follows, id: false, force: :cascade do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.timestamps
      t.index :follower_id
      t.index :followed_id
      t.index [:follower_id, :followed_id], unique: true
    end
  end
end
