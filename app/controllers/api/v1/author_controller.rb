class Api::V1::AuthorController < ApplicationController
  before_action :find_author, only: [:show, :update, :destory]
	def index
		@authors = Author.all
		render json: @authors
	end

	def show
		render json: @author
	end

	def create
		@author = Author.new(author_params)
		if @author.save
			render json: @author
		else
			render error: { error: 'Unable to create author.' }, status: 400
		end
	end
	
	def update
		if @author
			@author.update(author_params)
			render json: { message: 'Author successfully updated.' }, status: 200
		else
			render json: { error: 'Unable to update Author.' }, status:400
		end
	end

	def destory
		if @author
			@author.destory
			render json: { message: 'Author successfully deleted.' }, status: 200
		else
			render json: { error: 'Unable to delete author.' }, status:400
		end
	end

	private
	def author_params
		params.require(:author).permit(:name)
	end
	def find_author
		@author = Author.find(params[:id])
	end
end
