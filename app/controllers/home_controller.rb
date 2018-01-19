class HomeController < ApplicationController
  def top
    @posts = Post.all
    @count = Post.maximum('id')
    
    @post = Post.new
  end
end
