import cn from "classnames";
const Product = ({
  title,
  details,
  price,
  imgUrl,
  onClick = function () {},
}) => {
  return (
    <div className="py-6 mr-2 ml-2">
      <div className="flex max-w-md bg-gray-200 shadow-lg rounded-lg overflow-hidden">
        <div className={cn("w-1/3 bg-cover")}>
          <img src={imgUrl} />
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-between ">
          <div>
            <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{details}</p>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">{price}</h1>
            <button
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              onClick={(e) => {
                onClick(e);
              }}
            >
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
