'use client'
import { SearchBar } from '@components'
import { NewProjectModal } from './NewProjectModal'
import { ProjectDetailsModal } from './ProjectDetailsModal'
import { ProjectSidebarHeader } from './ProjectSidebarHeader'
import { ProjectList } from './ProjectList'
import { useProjectSidebar } from '@/hooks/useProjectSidebar'
import { StatusFilter } from './StatusFilter'

export const ProjectSidebar = () => {
    const {
        filteredProjects,
        selectedProjectId,
        tasks,
        searchQuery,
        statusFilter,
        showNewProjectModal,
        editingProject,
        detailsProject,
        setSearchQuery,
        setStatusFilter,
        setShowNewProjectModal,
        setEditingProject,
        setDetailsProject,
        handleCreateProject,
        handleEditProject,
        handleDeleteProject,
        handleUpdateProject,
        handleProjectSelect,
        handleOpenProjectModal,
        openEditModal
    } = useProjectSidebar()

    return (
        <div className="w-80 flex flex-col bg-(--bg-2) py-7 px-4 border-r border-(--bg-2)">
            {/* Header */}
            <ProjectSidebarHeader onNewProject={() => setShowNewProjectModal(true)} />

            {/* Search Bar */}
            <SearchBar
                className="mt-2 mb-4 bg-white dark:bg-[#232F48]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Status Filter */}
            <StatusFilter setStatusFilter={setStatusFilter} statusFilter={statusFilter} />

            {/* Projects List */}
            <ProjectList
                projects={filteredProjects}
                tasks={tasks}
                selectedProjectId={selectedProjectId}
                onProjectSelect={handleProjectSelect}
                onProjectOpenModal={handleOpenProjectModal}
                onProjectEdit={openEditModal}
                onProjectDelete={handleDeleteProject}
            />

            {/* New Project Modal */}
            <NewProjectModal
                isOpen={showNewProjectModal}
                onClose={() => setShowNewProjectModal(false)}
                onSubmit={handleCreateProject}
                mode="create"
            />

            {/* Edit Project Modal */}
            {editingProject && (
                <NewProjectModal
                    isOpen={true}
                    onClose={() => setEditingProject(null)}
                    onSubmit={handleEditProject}
                    initialData={editingProject.data}
                    mode="edit"
                />
            )}

            {/* Project Details Modal */}
            {detailsProject && (
                <ProjectDetailsModal
                    project={detailsProject}
                    onClose={() => setDetailsProject(null)}
                    onUpdate={handleUpdateProject}
                />
            )}
        </div>
    )
}
