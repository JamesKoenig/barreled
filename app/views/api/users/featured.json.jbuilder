json.key_format! camelize: :lower

json.featured_users do
  json.array! @featured_users do |featured_user|
    json.extract! featured_user, :id, :username
  end
end
