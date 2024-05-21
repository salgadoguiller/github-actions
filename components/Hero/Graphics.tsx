import Graphic1 from "@/components/Icons/Graphics/Graphic1";
import Graphic2 from "@/components/Icons/Graphics/Graphic2";

const Graphics = () => {
  return (
    <>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <Graphic1 />
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <Graphic2 />
      </div>
    </>
  );
};

export default Graphics;
