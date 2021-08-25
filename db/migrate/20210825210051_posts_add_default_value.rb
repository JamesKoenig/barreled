class PostsAddDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :total_likes, :integer, default: 0
  end
end
