import { ProjectSidebar } from '@/components/features/ProjectSidebar'
import { KanbanBoard } from '@/components/features/KanbanBoard'


const ProjectView = () => {
    return (
        <div className="flex h-[calc(100vh-95px)] overflow-hidden">
            <ProjectSidebar />
            <KanbanBoard />
        </div>
    )
}

export default ProjectView