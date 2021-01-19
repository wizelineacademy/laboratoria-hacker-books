
export interface Props {
  props: string;  
}
 
const ButtonSide : React.FC<Props> = ({props}) => {
    return ( 
        <button className="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Favorite</button>
     );
}
 
export default ButtonSide;