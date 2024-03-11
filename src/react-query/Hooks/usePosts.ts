import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
 }

const usePosts = (userId: number | undefined) => {
  return (
	 useQuery<Post[], Error>({
		// we are modifying the 'queryKey' as we are dealing with Hearical data and we will edit it in same way we do with actual link i.e. as we move from left to right the data becomes more specific e.g.-> (entire link)/user/uerId(like 1)/posts 
		// query key is created by us and should be diffenent for different call, if we have a constant wuery key like ['users','posts'] then call will be made only once at the start of program.
		queryKey: userId ? ['users', userId,'posts'] : ['posts'],
		queryFn: () =>
		axios
	  .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
		params: {
			userId
		}
	  })
	  .then((res) => res.data),

	  staleTime: 1 * 60 * 1000, // 1 min

	 })
  )
}

export default usePosts;