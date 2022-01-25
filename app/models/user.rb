class User < ApplicationRecord
  validates :username, :email, :session_token,
             presence: true, uniqueness: true
  validates :password, length:  { minimum: 6},
                       allow_nil: true

  before_validation :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  has_many :likes,
    class_name: :Like,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :likers,
    through: :posts,
    source: :likers

  has_many :follower_rows,
    foreign_key: :followed_id,
    class_name: :Follow

  has_many :followers,
    through: :follower_rows

  has_many :follow_rows,
    foreign_key: :follower_id,
    dependent: :destroy,
    class_name: :Follow

  has_many :follows,
    through: :follow_rows,
    source: :followed

  has_many :follows_posts,
    through: :follows,
    source: :posts

  has_many :feed,
    foreign_key: :user_id,
    class_name: :Feed

  has_many :notifications,
    foreign_key: :user_id,
    class_name: :Notification

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    return nil
  end

  def password=(password)
    @password = password

    self.password_digest =
      BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def feed_items
    feed.joins(<<~SQL
        JOIN
          users AS whos ON
            whos.id = feeds.who
      SQL
      ).joins(<<~SQL
        LEFT OUTER JOIN
          posts ON
            posts.id = feeds.post_id
      SQL
      ).joins(<<~SQL
        LEFT OUTER JOIN
          likes ON
              feeds.post_id = likes.post_id
            AND
              feeds.user_id = likes.user_id
      SQL
      ).select(
        :created_at,
        :who,
        :action,
        :post_id,
        :username,
        :body,
        :author_id,
        :total_likes,
        Arel.sql('likes.user_id IS NOT NULL as post_liked')
      )
  end

  def liked_items
    liked_posts.select(
      :created_at,
      :id,
      :username,
      :body,
      :author_id,
      :total_likes,
      Arel.sql('true as post_liked')
    )
  end
end
