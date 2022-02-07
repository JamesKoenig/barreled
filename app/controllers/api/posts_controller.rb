class Api::PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    if !@post
      render json: @post.errors.full_messages, status: 404
    else
      like = Like.find_by(post_id: @post.id, user_id: current_user.id)
      @post.post_liked = !!like
      render :show
    end
  end

  def create
    @post = Post.new(formFields)
    @post.author_id = current_user.id
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

    if @post.author.id != current_user.id
      render json: ["cannot edit another user's posts"], status: 401
    elsif @post.update(body: params[:body])
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

  def index
    @posts = Post.all
    render :index
  end

  private

  def formFields
    hashMaybe(params.require(:post).permit(:id,:body,:photo))
  end

  def maybe(thing)
    return case thing
           when "undefined"
             nil
           else
             thing
           end
  end

  def hashMaybe(things)
    res = {}
    # note that this isn't lazy
    things.each do |key,value|
      res[key] = maybe(value)
    end
    return res
  end
end
