class Post < ApplicationRecord
  validates :body, :author_id, presence: true
  attr_accessor :post_liked

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    class_name: :Like,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :user

  has_one_attached :photo

  def update_total_likes
    self.total_likes = get_total_likes
    save!
  end

  def get_total_likes
    Post.left_outer_joins(:likes)
        .where(posts: { id: id })
        .group("posts.id")
        .pluck(Arel.sql("count(likes.user_id)"))[0]
  end

  def Post::photo_url(blob_id,filename)
    return nil unless (blob_id && filename)
    url_strs = [
      "rails",
      "active_storage",
      "blobs",
      ActiveStorage.verifier.generate(blob_id, purpose: :blob_id),
      filename
    ].map do |unescaped_string|
      CGI.escape unescaped_string
    end

    return "/"+url_strs.join("/")
  end
end
