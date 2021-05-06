class RenamePostsUsers < ActiveRecord::Migration[5.2]
  def change
    rename_table :posts_users, :likes
  end
end
