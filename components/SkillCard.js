export function SkillCard({ name, level, description }) {
    return (
      <div className="bg-content1/50 border border-content3/10 p-4 rounded-md">
        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-content3 text-sm mt-1">{description}</p>
        <div className="relative w-full h-2 bg-content2/50 rounded-full overflow-hidden mt-3">
          <div 
            className="absolute top-0 left-0 h-full bg-primary/70 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <div className="mt-1 text-right text-xs text-content3">{level}%</div>
      </div>
    );
  }