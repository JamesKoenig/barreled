class Post < ApplicationRecord
  validates :body, :author_id, presence: true
  attr_accessor :post_attr_liked

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

  def Post::with_metadata
    Post.joins(<<~SQL
      JOIN
        users AS authors ON
          authors.id = posts.author_id
    SQL
    ).joins(<<~SQL
      LEFT OUTER JOIN
        active_storage_attachments AS attachments ON
            attachments.record_type = 'Post'
          AND
            attachments.name        = 'photo'
          AND
            attachments.record_id   = posts.id
    SQL
    ).joins(<<~SQL
      LEFT OUTER JOIN
        active_storage_blobs AS blobs ON
          blobs.id = attachments.blob_id
    SQL
    ).select(<<~SQL
      posts.created_at    AS post_created_timestamp,
      posts.id            AS post_id,
      posts.body          AS post_body,
      authors.id          AS author_id,
      authors.username    AS author_username,
      attachments.blob_id AS blob_id,
      blobs.filename      AS blob_filename
    SQL
    )
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
