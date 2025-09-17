const VerticalSidebar = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full md:w-12 lg:w-16 bg-primary z-40 flex-col items-center justify-center">
      {/* Top Text - Vertical */}
      <div className="absolute top-8 -rotate-90 origin-center">
        <span className="text-background font-bold text-base lg:text-lg tracking-wider whitespace-nowrap">
          CRIA CLICK
        </span>
      </div>
      
      {/* Middle Text - Vertical */}
      <div className="flex-1 flex items-center justify-center">
        <div className="-rotate-90 origin-center">
          <span className="text-background font-bold text-base lg:text-lg tracking-wider whitespace-nowrap">
            DIGITAL
          </span>
        </div>
      </div>
      
      {/* Bottom Text - Vertical */}
      <div className="absolute bottom-8 -rotate-90 origin-center">
        <span className="text-background font-bold text-base lg:text-lg tracking-wider whitespace-nowrap">
          AGENCY
        </span>
      </div>
    </div>
  );
};

export default VerticalSidebar;