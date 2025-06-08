interface DDITypeCardProps {
  name: string;
  describtion: string;
  bg: string;
}

const DDITypeCard = ({ bg, describtion, name }: DDITypeCardProps) => {
  return (
    <div className=" border border-gray-300 p-4 border-solid rounded-lg space-y-2 ">
      <div className="flex items-center gap-2">
        <div className={`w-4 h-4 rounded-full ${bg}`}></div>
        <h4 className="font-medium text-gray-700">{name}</h4>
      </div>
      <div>
        <p className="text-gray-600 text-sm ">{describtion}</p>
      </div>
    </div>
  );
};

export default DDITypeCard;
