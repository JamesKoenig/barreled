class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User
end
