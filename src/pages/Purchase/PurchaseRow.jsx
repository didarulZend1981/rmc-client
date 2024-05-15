

const PurchaseRow = ({ booking,handleDelete}) => {
   const { _id, date, Food_Name, Food_Image, quantity,price,quantiPrice,owner_name } = booking;
  console.log(booking);
  return (
    
   <tr>
        <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        <td><img src={Food_Image} alt="Avatar Tailwind CSS Component" className="w-[100px] h-[100px]" /></td>
        <td>{Food_Name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{quantiPrice}</td>
        <td>{date}</td>
        <td>{owner_name}</td>
   </tr>
  );
};

export default PurchaseRow;

