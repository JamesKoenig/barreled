class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true
  validates_uniqueness_of :user_id,
    scope: :post_id,
    message: "has already liked this post"

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  def destroy
    # this is based on rails source code, git tag v5.4.4.4
    #   in activerecord/lib/active_record/persistence.rb lines 323, 681, & 336
    res = true
    if persisted?
      res = self.class._delete_record( \
        post_id: self.post_id, user_id: self.user_id) > 0
    end

    if res
      post.update_total_likes if post
      @destroyed = true
      freeze
    end
    return res
  end

  def save
    if super()
      post.update_total_likes
    else
      false
    end
  end
end
