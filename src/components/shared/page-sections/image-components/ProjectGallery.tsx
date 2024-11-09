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
      <div className='my-48 h-fit lg:w-screen lg:px-8'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-8 text-center'>{galleryHeader}</h2>
          <div className='mb-16 h-[2px] w-3/4 max-w-2xl bg-border-gradient'></div>
        </div>
        <div className='bg-primary-md1 mx-auto mb-8 h-[2px] w-3/4 max-w-2xl'></div>
        <ul className='m-0 mx-auto flex flex-wrap items-center justify-center gap-8 text-center sm:flex-row lg:gap-8'>
          {projects.map((project, index) => (
            <li
              key={project.link}
              className={`card-zoom group relative z-10 flex h-[25vh] lg:h-[40vh] ${
                index === 0 && projects.length % 2 !== 0
                  ? 'w-full'
                  : 'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]'
              } bg-cover bg-top bg-no-repeat rounded-3xl overflow-hidden`}
            >
              <div className='size-full'>
                <a
                  className='flex size-full items-center justify-center hover:scale-100'
                  href={`${project.link}`}
                  target='_blank'
                >
                  <div
                    className='card-zoom-image group-hover:zoom-in z-0 brightness-50 group-hover:brightness-100'
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  ></div>
                  <p className='bg-white h1-sub dark:bg-black dark:text-white z-50 rounded-3xl bg-opacity-50 p-2 backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:backdrop-brightness-50 group-hover:opacity-100'>
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
