class AddAgentToReports < ActiveRecord::Migration
  def change
    add_column :reports, :agent, :string

  end
end
