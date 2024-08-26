
import home from './assets/hero2.svg'
function Home() {
    return (
        <div>
            <div className=" flex py-12 lg:py-36">
                <div className="w-full lg:w-1/2">
                    <h1 className='lg:text-7xl text-3xl text-center lg:text-left  font-bold lg:font-semibold'>World Class Desin for the products</h1>
                    <p className='mt-4 lg:mr-8 text-2xl text-center lg:text-left text-gray-600'>Lets bring lfe to your brand.</p>
                    <div className='flex mt-12 justify-center lg:justify-start'>
                        <button className='mr-5 bg-purple-600 text-lg text-white px-3 py-2 rounded'>Services</button>
                        <button className='mr-5  bg-red-600 text-lg text-white px-3 py-2 rounded'>Contact Us</button>
                    </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                    <img src={home}></img>
                </div>

            </div>
            <div className='flex justify-center mt-4 gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                    <span className='text-xl'>scrooldown</span>
                </div>
        </div>
    )
}

export default Home