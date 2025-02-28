import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListPostRequest } from './redux/slice';
import { useSelector } from 'react-redux';
import Card from './components/Card';

const App = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state: { listPost: any }) => state.listPost);
  useEffect(() => {
    dispatch(getListPostRequest({}));
  }, [dispatch]);

  return (
    <div className='px-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {listPost.map((post: any) => (
          <div key={post.id}>
            <Card id={post.id} title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
