import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    interface Blogs {
        id: number;
        title: string;
        description: string;
        author: string;
        slug:string;
        image: any;
        avatar: any;
    }
    const blogs: Blogs[] = [{
        id: 1,
        title: 'What is Qwik',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        author: 'John Doe',
        avatar: '/images/john.jpg',
        slug:"what-is-qwik",
        image: "/images/qwik.jpg"
    },
    {
        id: 2,
        title: 'Building a blog with Qwik city',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        author: 'Mandy Eden',
        avatar: "/images/mandy.jpg",
        slug:"building-a-blog-with-qwik-city",
        image: "/images/blog.jpg"
    },
    ];

  return (
    <div class='p-3 lg:p-8 gap-8 w-full max-w-full my-0 mx-auto flex flex-col justify-center items-center'>
        <h1 class='text-3xl'>Stories from Qwik</h1>
        {
            blogs.map(blog => (
                <Link key={blog.id} href={blog.slug} class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-full md:rounded-none md:rounded-l-lg" src={blog.image} alt={blog.title} />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src={blog.avatar} alt={`avatar of ${blog.nam}`} />
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">{blog.author}</p>
                                <p class="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>

  );
});
