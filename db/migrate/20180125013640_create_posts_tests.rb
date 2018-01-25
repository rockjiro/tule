class CreatePostsTests < ActiveRecord::Migration
  def change
    create_table :posts_tests do |t|
      t.string :contents
      t.string :category

      t.timestamps null: false
    end
  end
end
