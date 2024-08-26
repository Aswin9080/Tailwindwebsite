
import company from './assets/dummy_logo.png'
export default function Companies() {
    return (
        <div>
            <section class="rounded-2xl p-5 mb-10">
                <div class="container mx-auto p-0 lg:px-28">
                    <div class="bg-[#10B981] rounded-2xl p-10">
                        <h2 class="font-bold text-3xl text-white text-center">
                            Companies who trust on us
                        </h2>
                        <div class="flex flex-wrap mt-8 justify-center">
                            <div class="p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <img src={company} alt="" class="mx-auto max-h-12"></img>
                            </div>
                            <div class="p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <img src={company} alt="" class="mx-auto max-h-12"></img>
                            </div>
                            <div class="p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <img src={company} alt="" class="mx-auto max-h-12"></img>
                            </div>
                            <div class="p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <img src={company} alt="" class="mx-auto max-h-12"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}