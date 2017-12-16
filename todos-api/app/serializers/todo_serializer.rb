class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_by, :created_at, :updated_at

  # no need to receive all the items everytime
  # has_many :items
end
