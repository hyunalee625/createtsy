class Api::UsersControllerController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def new
        @user = User.new
        render :new
    end

    def create 
        @user = User.new(users_params)
        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            redner :new
        end
    end

    private

    def users_params
        params.require(:user).permit(:email, :password)
    end

end
