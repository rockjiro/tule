class HomeController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  def top
    @posts = Post.all
    @count = Post.maximum('id')
    
    @post = Post.new
  end

  def create
    contents = post_params
    uri_reg = URI.regexp(%w[http https])
    contents = contents.to_s
    contents.gsub!(uri_reg) {%Q{<a href="#{$&}">#{$&}</a>}}

    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to '/', notice: 'Post was successfully created.' }
        format.json { render '/', status: :created, location: '/' }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:contents)
    end
end
