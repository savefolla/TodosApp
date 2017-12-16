class TodosController < ApplicationController
  before_action :set_todo, only: [:update, :destroy]

  # GET /todos
  def show
    @todos = Todo.all.order(:title)
    json_response(@todos)
  end

  # POST /todos
  def create
    @todo = Todo.create!(todo_params)
    json_response(@todo, :created)
  end

  # PUT /todos
  def update
    @todo.update(todo_params);
    json_response(@todo, :ok)
  end

  # DELETE /todos
  def destroy
    @todo.destroy
    json_response(@todo, :ok)
  end

  private

  def todo_params
    params.permit(:title, :created_by)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
