interface Project {
  link: string;
  // linkText: string;
  image: string;
  // imageAlt: string;
  title: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  galleryHeader: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  galleryHeader,
}) => {
  console.log('asdf');
  console.log(projects[0].image);
  return (
    <>
      <div className='my-8 lg:my-16 lg:px-8'>
        <h3 className='mb-4 text-center text-lg font-bold lg:text-3xl'>
          {galleryHeader}
        </h3>
        <div className='mx-auto mb-8 h-[2px] w-3/4 max-w-2xl bg-primary-md1'></div>
        <ul className='align-center m-0 grid grid-cols-1 text-center hover:cursor-pointer group-hover:shadow-inner sm:grid-cols-2'>
          {projects.map((project) => (
            <li
              key={project.title} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-64 bg-cover bg-center'
            >
              <a
                className='flex size-full items-center justify-center  hover:scale-100'
                target='_blank'
                href={project.link}
              >
                <div
                  className='card-zoom-image group-hover:zoom-in z-0 group-hover:brightness-50 lg:brightness-100'
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                ></div>
                <span className='z-50 rounded bg-white bg-opacity-50 p-2 text-xl text-black transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 dark:bg-black dark:text-white'>
                  {project.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectGallery;
