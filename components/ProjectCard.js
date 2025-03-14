export function ProjectCard({ title, description, tags, github, demo }) {
    return (
      <div className="bg-content1/50 border border-content3/10 rounded-md overflow-hidden">
        <div className="p-4 border-b border-content3/10">
          <h3 className="text-base font-medium">{title}</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-content3">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-md bg-content2/30 text-content3"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-content3/10 flex justify-between">
          <Link
            isExternal
            className={buttonStyles({
              color: "default",
              radius: "sm",
              variant: "light",
              size: "sm",
            })}
            href={github}
          >
            <GithubIcon size={16} />
            Code
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "sm",
              variant: "light",
              size: "sm",
            })}
            href={demo}
          >
            View Live
          </Link>
        </div>
      </div>
    );
  }