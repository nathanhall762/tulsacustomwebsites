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
      <div className='my-48 lg:px-8'>
      <div className='flex flex-col items-center'>
        <h2 className='mb-8 text-center'>{galleryHeader}</h2>
        <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
      </div>
        <div className='mx-auto mb-8 h-[2px] w-3/4 max-w-2xl bg-primary-md1'></div>
        <ul className='m-0 mx-auto flex flex-col items-center justify-center gap-4 text-center hover:cursor-pointer group-hover:shadow-inner sm:flex-row lg:gap-8 h-[60vh] lg:h-[45vh]'>
          {projects.map((project) => (
            <li
              key={project.link} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-full w-[320px] flex-grow bg-cover bg-center'
            >
              <div className='size-full'>
                <a
                  className='flex size-full items-center justify-center  hover:scale-100'
                  // href={`/${project.parent_route ? project.parent_route + '/' : ''}${project.slug}`}
                >
                    <div
                    className='card-zoom-image group-hover:zoom-in z-0 brightness-50 group-hover:brightness-100'
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                    ></div>
                  <p className='z-50 bg-white bg-opacity-50 p-2 backdrop-blur-lg rounded-3xl h1-sub transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 dark:bg-black dark:text-white'>
                    {project.title}
                  </p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectGallery;
