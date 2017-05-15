class PostsController < ApplicationController

  layout "three_column"

  def index
    @users = User.all
    @posts = Post.joins(:user).select('posts.title, posts.content, users.first_name, users.last_name')
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to "/posts"
    else
      redirect_to "/posts"
    end
  end

  private
    def post_params
      params.require(:post).permit(:title, :content, :user_id)
    end

end
