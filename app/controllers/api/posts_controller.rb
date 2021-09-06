class Api::PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    like = Like.find_by(post_id: @post.id, user_id: current_user.id)
    @post.post_liked = !!like
    render :show
  end

  def create
    @post = Post.new(author_id: current_user.id,
                     body: params[:post][:body])
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def feed
    @posts = current_user.posts
    render :index
  end

  def update
    @post = Post.find(params[:id])

    if @post.author != current_user.id
      render json: ["cannot edit another user's posts"], status: 401
    end

    if @post.update(body: params[:post][:body])
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.author != current_user.id
      render json: ["cannot delete another user's post"], status: 401
    end

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
end
