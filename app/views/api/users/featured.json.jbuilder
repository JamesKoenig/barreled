json.key_format! camelize: :lower

json.featured_users do
  @featured_users.each do |featured_user|
    json.set! featured_user.id do
      json.extract! featured_user, :id, :username
    end
  end
end
