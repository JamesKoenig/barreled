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

  def delete
    sql_sanitized = ActiveRecord::Base.send :sanitize_sql, [
        "DELETE FROM likes WHERE likes.post_id = ? AND likes.user_id = ?",
        post_id,
        user_id
    ]

    ActiveRecord::Base.connection.execute sql_sanitized

    # as per the behavior of the overloaded delete method
    return self
  end
end
