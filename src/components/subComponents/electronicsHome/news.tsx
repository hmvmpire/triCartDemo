import Marquee from "react-fast-marquee";

export const News = () => {
  return (
    <div className="bg-ELECTRONICS_PRIMARY text-white h-14 flex items-center">
      <Marquee className="fw_600 text-base tracking-wider">
        <div className="uppercase flex items-center gap-x-10 pr-10">
          <p>No Minimum Purchase</p>-<p>Free Shipping on All Orders</p>-
        </div>
        <div className="uppercase flex items-center  gap-x-10 pr-10">
          <p>No Minimum Purchase</p>-<p>Free Shipping on All Orders</p>-
        </div>
        <div className="uppercase flex items-center  gap-x-10 pr-10">
          <p>No Minimum Purchase</p>-<p>Free Shipping on All Orders</p>-
        </div>
        <div className="uppercase flex items-center  gap-x-10 pr-10">
          <p>No Minimum Purchase</p>-<p>Free Shipping on All Orders</p>
        </div>
      </Marquee>
    </div>
  );
};
