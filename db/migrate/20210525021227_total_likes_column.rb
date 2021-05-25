class TotalLikesColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :total_likes, :integer
  end
end
