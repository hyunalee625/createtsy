class Api::ReviewsController < ApplicationController

    def index
        # @reviews = Review.where(product_id: params[:product_id])
        @reviews = Review.all 
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render: show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render: show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review.destroy
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:id, :body, :user_id, :product_id, :rating)
        # params.require(:review).permit(:product_id, :rating)
    end
    
end
