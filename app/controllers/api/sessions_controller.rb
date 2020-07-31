class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user 
            login!(@user)
            render 'api/users/show'
        else
            # debugger
            render json: ["Can't be blank."], status: 422
            #render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            logout!
            render json: ['Successfully logged out!']
        else
            render json: ['Currently not signed in.'], status: 404
        end
    end

end
