require 'test_helper'

class NotesControllerTest < ActionController::TestCase
  setup do
    @note = create(:note)
  end

  test "should get index" do
    get :index, :diary_day_id => 1
    assert_response :success
    assert_not_nil assigns(:notes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create note" do
    assert_difference('Note.count') do
      post :create, note: { comment: @note.comment, section: @note.section, start_time: @note.start_time }
    end

    assert_redirected_to note_path(assigns(:note))
  end

  test "should show note" do
    get :show, id: @note
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @note
    assert_response :success
  end

  test "should update note" do
    patch :update, id: @note, note: { comment: @note.comment, section: @note.section, start_time: @note.start_time }
    assert_redirected_to note_path(assigns(:note))
  end

  test "should destroy note" do
    assert_difference('Note.count', -1) do
      delete :destroy, id: @note
    end

    assert_redirected_to notes_path
  end
end
