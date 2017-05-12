class ResultsController < ApplicationController
  def index
    @survey = Survey.new
  end

  def create
    Survey.create(survey_params)
    @times = Survey.all.count
    flash[:success] = "Thanks for submitting this form! You have submitted this form #{@times} times now."
    redirect_to '/results'
  end

  def show_result
    @survey = Survey.last
  end

  private
    def survey_params
      params.require(:survey).permit(:name, :location, :language, :comment)
    end
end
