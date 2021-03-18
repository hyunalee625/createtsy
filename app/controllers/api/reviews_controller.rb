class Api::ReviewsController < ApplicationController
    #   before_action :ensure_login, only: [:create]


    def index

        if params[:user_id]
            @reviews = Review.where(user_id: params[:user_id])
        elsif params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])
        else
            @reviews = Review.all
        end
        
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def edit
        @review = Review.find(params[:id])
        render :edit
    end

    def update
        debugger
        @review = Review.find_by(id: params[:id])

        debugger
        if @review.update!(review_params)
            debugger
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            @reviews = Review.where(product_id: params[:product_id])
            # render json: { data: @reviews }
            respond_to do |format|
                format.json
            end

        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:id, :body, :user_id, :product_id, :rating)
    end
    
end
