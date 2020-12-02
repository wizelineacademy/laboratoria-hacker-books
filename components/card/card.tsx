const Card: React.FC = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      {children}
    </div>
  );
};

export default Card;
