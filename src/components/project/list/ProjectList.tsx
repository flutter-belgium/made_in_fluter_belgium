import style from '@/components/project/list/ProjectList.module.scss'
import ProjectListItem from './item/ProjectListItem'
import Link from 'next/link'
import { translations } from '@/util/locale/localization'

interface ProjectListProps {
    title?: string,
    projects: Array<MinimizedProject>,
}

const ProjectList = (props: ProjectListProps) => {
    return (
        <div>
            {
                props.title == null ? <></> : <h2>{props.title}</h2>
            }
            <div className={style.container}>
                {
                    props.projects.map((project, index) => (
                        <ProjectListItem
                            key={index}
                            project={project} />
                    ))
                }
                <Link
                    className={style.addProjectContainer}
                    href='https://github.com/flutter-belgium/made_in_flutter_belgium_data/wiki/Projects'
                    target='_blank'
                    aria-label={translations.projects_add_project_btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}


export default ProjectList
