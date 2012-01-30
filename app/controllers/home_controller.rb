class HomeController < ApplicationController
 # require 'json'
  def index
    if user_signed_in?
      @reports = current_user.reports
      .order('created_at DESC')
      .paginate(page: params[:page], per_page: 20)
    else
      redirect_to new_session_path(User.new)

    end
  end


  def report
    @report = Report.new params[:report]
    if @report.save 
      head :ok
    end
  end


end
