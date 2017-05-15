class StudentsController < ApplicationController

  before_action :set_student, only: [:show, :edit, :update, :destroy]
  before_action :set_dojo, only: [:index, :new, :show, :edit]

  def index
    @students = Student.all.where(dojo:@dojo)
  end


  def show
    @cohort = Student.all.where("dojo_id= ? AND (created_at BETWEEN ? and ?)", @dojo.id, @student.created_at.beginning_of_day, @student.created_at.end_of_day)
  end

  def new
    @student = Student.new
  end

  def edit
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to "/dojos/#{params[:dojo_id]}"
    else
      redirect_to "/dojos/#{params[:dojo_id]}/students/new"
    end


    # respond_to do |format|
    #   if @student.save
    #     format.html {redirect_to @dojo, notice: 'Student was successfully created.' }
    #
    #   else
    #     format.html { render :new }
    #     format.json { render json: @student.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  def update
    @student.update(student_params)
    redirect_to "/dojos/#{params[:dojo_id]}"
  end

  def destroy
    @student.destroy
    redirect_to "/dojos/#{params[:dojo_id]}"
  end

  private
    def set_student
      @student = Student.find(params[:id])
    end
    def set_dojo
      @dojo = Dojo.find(params[:dojo_id])
    end

    def student_params
      params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
    end


end
