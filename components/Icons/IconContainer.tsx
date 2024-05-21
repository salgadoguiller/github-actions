const IconContainer = ({
  children
}: IconContainerProps) => {
  return (
    <div className="duration-200 hover:scale-125">
      {children}
    </div>
  );
};

export default IconContainer;
