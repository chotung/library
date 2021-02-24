class Api::V1::BookController < ApplicationController
	before_action :find_book, only: [:show, :update, :destory]
	def index
		@books = Book.all
		render json: @books
	end

	def show
		render json: @book
	end

	def create
		@book = Book.new(book_params)
		if @book.save
			render json: @book
		else
			render error: { error: 'Unable to create book.' }, status: 400
		end
	end
	
	def update
		if @book
			@book.update(book_params)
			render json: { message: 'Book successfully updated.' }, status: 200
		else
			render json: { error: 'Unable to update Book.' }, status:400
		end
	end

	def destory
		if @book
			@book.destory
			render json: { message: 'Book successfully deleted.' }, status: 200
		else
			render json: { error: 'Unable to delete book.' }, status:400
		end
	end

	private
	def book_params
		params.require(:book).permit(:title)
	end
	def find_book
		@book = Book.find(params[:id])
	end
end
