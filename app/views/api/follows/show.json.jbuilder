json.key_format! camelize: :lower

json.set! @follow_info[:user_id] do
  json.extract! @follow_info, :is_followed, :hidden_follow
end
