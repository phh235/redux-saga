const Card = ({ id, title, body }: { id: number; title: string; body: string }) => {
  return (
    <div key={id} className='mt-3'>
      <div className='bg-white shadow-sm rounded-lg overflow-hidden'>
        <div className='p-4'>
          <h5 className='text-lg font-bold mb-2'>{title}</h5>
          <p className='text-gray-700'>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

