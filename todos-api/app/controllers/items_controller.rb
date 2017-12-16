class ItemsController < ApplicationController
  before_action :set_todo
  before_action :set_item, only: [:update, :destroy]


  # GET    /todos/items(.:format) items#show
  def show
    json_response(@todo.items)
  end

  # POST   /todos/items(.:format) items#create
  def create
    @new_item = @todo.items.create!(item_params)
    json_response(@new_item, :created)
  end

  # PUT    /todos/items(.:format) items#update
  def update
    @item.update(item_params)
    json_response(@item)
  end

  # DELETE /todos/items(.:format) items#destroy
  def destroy
    @item.destroy
    json_response(@item)
  end

  private

  def item_params
    params.permit(:name, :done)
  end

  def set_todo
    @todo = Todo.find(params[:todo_id])
  end

  def set_item
    @item = @todo.items.find_by!(id: params[:id]) if (@todo)
  end
end
